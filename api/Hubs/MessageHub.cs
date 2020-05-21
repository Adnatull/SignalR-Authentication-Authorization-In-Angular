using System;
using System.Threading.Tasks;
using api.Data;
using api.Dtos;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace api.Hubs
{
    [Authorize]
    public class MessageHub : Hub
    {
        private readonly DataContext _context;
        private readonly UserManager<AppUser> _userManager;

        public MessageHub(DataContext context, UserManager<AppUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }
        public Task Send(string message) {

            var from = Context.User.Identity.Name;
            var myJsonObject = JsonConvert.DeserializeObject<MessageDto>(message);
            string text = from + " wrote: "+ myJsonObject.Message;
            var toUser = _userManager.FindByNameAsync(myJsonObject.To).GetAwaiter().GetResult();
             if(toUser == null) {
                 Console.WriteLine("User doesnot exist");
             }
            return Clients.User(toUser.Id).SendAsync("Send", text);
        }
        
    }
}
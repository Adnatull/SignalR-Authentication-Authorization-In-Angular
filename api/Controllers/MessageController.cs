using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/message")]
    public class MessageController : ControllerBase
    {
        public IActionResult Post() {
            // Broadcast the message to our clients
            return Ok("hh");
        }
    }
}
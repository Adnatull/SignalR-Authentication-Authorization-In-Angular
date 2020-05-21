using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace api.Models {
    public class AppUser : IdentityUser {      
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public bool Status { get; set; }
        public bool? IsEnabled { get; set; }

        public virtual List<AppRole> UserRoles { get; set; }
    }
}
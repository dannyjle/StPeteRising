using System.ComponentModel.DataAnnotations;

namespace StPeteRising.Models
{
    public class Project
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Status { get; set; }

        public string Address { get; set; }

        public string Class { get; set; }

        public int Floor { get; set; }

        public int Units { get; set; }

        public string Completion { get; set; }

        public string Website { get; set; }

        public int UserId { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }
    }
}
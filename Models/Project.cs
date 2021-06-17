namespace StPeteRising.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
        public string Address { get; set; }
        public string Class { get; set; }
        public int Floor { get; set; }
        public int Units { get; set; }
        public string Completion { get; set; }
        public string Website { get; set; }
    }
}
/*class Resume {
  constructor(profile, education, experience, skills) {
    this.profile = profile; // RichTextEditor content for profile
    this.education = education; // Array of education objects
    this.experience = experience; // Array of experience objects
    this.skills = skills; // Array of skill strings
  }
}
*//*
class Resume {
  constructor(profile = '', education = [], experience = [], skills = []) {
    this.profile = profile; // RichTextEditor content for profile
    this.education = education; // Array of education objects
    this.experience = experience; // Array of experience objects
    this.skills = skills; // Array of skill strings
  }

  addEducation(education) {
    this.education.push(education);
  }

  addExperience(experience) {
    this.experience.push(experience);
  }

  addSkill(skill) {
    this.skills.push(skill);
  }
}
*/
class Resume {
  constructor(data) {
    this.name = data.name; // Name on the resume
    this.address = new Address(data.address || {}); // Address object
    this.experience = data.experience.map(exp => new Experience(exp)); // Array of Experience objects
  }
}

class Address {
  constructor(address) {
    this.street = address.street || ''; // Street address
    this.city = address.city || ''; // City
    this.state = address.state || ''; // State
    this.zip = address.zip || ''; // Zip code
  }
}

class Experience {
  //constructor(jobTitle, company, startDate, endDate, responsibilities = []) {
  constructor(experience) {
    this.jobTitle = experience.jobTitle || ''; // Job title
    this.company = experience.company || ''; // Company name
    this.startDate = experience.startDate; // Start date of employment
    this.endDate = experience.endDate; // End date of employment
    this.responsibilities = experience.responsibilities.map(res => new Responsibility(res)); // Array of responsibilities
  }
}

class Responsibility {
  constructor(description) {
    this.description = description; // Description of the responsibility
  }
}

export default Resume;

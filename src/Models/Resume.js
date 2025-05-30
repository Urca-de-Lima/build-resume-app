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
  constructor(name='') {
    this.name = name; // Name one the resume
  }
}
export default Resume;

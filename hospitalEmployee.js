class HospitalEmployee {
  constructor(name, remainingVacationDays) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  static generatePassword(){
    return Math.floor(Math.random() * (10000 - 1)) + 1;
  }
}

class Nurse extends HospitalEmployee{
  constructor(name, certifications){
    super(name); 
    this._certifications = certifications;
  }
  addCertification(newCertification){
    return this._certifications.push(newCertification);
  }
}

class Doctor extends HospitalEmployee{
  constructor(name, insurance){
    super(name);
    this._insurance = insurance; 
  }
}

const nurseJacky = new Nurse('Jacky', ['ICU','Oncology']);
nurseJacky.takeVacationDays(5);
console.log(nurseJacky._remainingVacationDays);
console.log(nurseJacky._certifications);
nurseJacky.addCertification('Peds');
console.log(nurseJacky._certifications);
const doctorLee = new Doctor('Lee', 'insurance');
console.log(doctorLee._insurance);
doctorLee.takeVacationDays(2);
console.log(doctorLee.remainingVacationDays);

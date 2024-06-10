function NewName() {
    this.user = 'Karan';
    this.work = 'Trainee';
    console.log(this.user)
}
NewName(this.user)
this.user = 'Mayank'
NewName(this.user)

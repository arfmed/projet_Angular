export class Entreprise{
    constructor(
        public id?:number,
        public nom?:string,
        public email?:string,
        public mdp?:string,
        public logoEntreprise?:string,
        public photoCouverture?:string,
        public urlEntreprise?:string,
        public adresse?:string,
    ){}
}
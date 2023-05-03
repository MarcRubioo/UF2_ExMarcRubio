export class Departament {
  DEPT_CODI?: number;
  DEPT_NOM: string;
  DEPT_UBICACIO?: string;
  DEPT_TELEFON?: string;
  DEPT_PROF_DNI?: string;

constructor(codi: number, nom: string, ubi: string, tel: string, dept_prof_dni: string){
  this.DEPT_CODI = codi;
  this.DEPT_NOM = nom;
  this.DEPT_UBICACIO = ubi;
  this.DEPT_TELEFON = tel;
  this.DEPT_PROF_DNI = dept_prof_dni;
  }
}

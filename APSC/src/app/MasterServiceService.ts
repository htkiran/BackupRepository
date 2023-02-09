import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})

export class MasterServiceService {
  constructor(
    private http: HttpClient,

  ) { }

  // External 4.15  ng build --base-href /assam/
  // basics_url = 'http://123.201.131.118:9898/AORP/';

  // Internal  4.15  ng build --base-href /assam1/
  // basics_url = 'http://192.168.4.15:9898/AORP/'

  // Development
  // basics_url = 'http://localhost:8070/Assam_Online_Recruitement_Portal/';

  //Live ng build --base-href
  basics_url = 'https://online.apscrecruitment.in/AORP/';

  // Bharagavi
  // basics_url = 'http://localhost:9090/AORP/'



  fetchdownloadetails(postid: any, employeeid: any) {
    var url = this.basics_url + 'finaldownloaddetails'
    return this.http.get<fetchdownloaddetails>(url, { params: { employeeid: employeeid, postid: postid } })
  }


  fetchpaymentsuccessdetails(postid: any, employeeid: any) {


    console.log(" PS Detsils")
    var url = this.basics_url + 'fetchpayementdata'
    return this.http.get<Paymentsuccessdetails>(url, { params: { postid: postid, employeeid: employeeid } })
  }


}

// export interface  documentuploadarray
// {
//   documents : Array<documentuploadedduringotr>
// }

export interface documentuploadedduringotr {
  employeeid: string
  documenttype: string
  certificateno: string
  issuedate: string,
  issueauthority: string
  document: string
}

export interface splitpaymentdetails {
  ApplicaitonFee: number,
  ProcessingFee: number
  TaxableAmount: number
  TotalAmount: number
  DisableFlag: number
}

export interface paymentpendingdetailsattributes {
  depatid: string
  officecode: string
  amount: string
}

export interface paymentpendingdetails {
  slno: string,
  postid: string,
  employeeid: string,
  bankcode: string,
  prn: string,
  bankcin: string,
  taxid: string,
  status: string,
  bankname: string,
  entry_DATE: string,
  grn: string,
  partyname: string,
  department_ID: string,
  amount: string,
  transcompletiondatetime: string
}

export interface payslipdetails {
  name: string
  status: string
  amount: string
  bankName: string
  bankCIN: string
  phoneNo: string
  emailID: string
  transacitonNo: string
  grn: string
  applicaitonID: string
  transactionDate: string
}


export interface receivedData {
  employeeid: string;
  otrstatus: string;
  fullname: string;
  emailid: string;
  phonenumber: string
}

export interface reterivePersonalDetails {
  full_name: string;
  fathers_name: string;
  mothers_name: string;
  gender: string;
  d_o_b: string;
  mobile: string;
  alternative_Mobie_number: string;
  email: string;
  nationality: string;
  permanent_resident_of_assam: string;
  caste: string;
  special_category: string;
  special_category_sub_category: Array<string>
  degree_of_dis: string;
  permanent_address: string;
  country: string;
  state: string;
  district: string;
  pincode: string;
  photo: string;
  signature: string;
  otrfinished: number
}

export interface reteriveEducationalQualificationDetails {
  schoolingdetails: Array<any>;
  undergraduationdetails: Array<any>;
  postgraduation: Array<any>;
  otherqualification: Array<any>;
  researchpapers: Array<any>;
}
export interface schoolingdetails {
  slno: string;
  examination: string;
  mainsubjects: string;
  duration: string;
  yearofpassing: string;
  nameofschool: string;
  nameofboard: string;
  markscgpa: string;
  marks: string;
}

export interface undergraduationdetails {
  slno: string;
  examination: string;
  mainsubjects: string;
  duration: string;
  yearofpassing: string;
  nameofschool: string;
  nameofboard: string;
  markscgpa: string;
  marks: string;
}

export interface postgraduation {
  slno: string;
  examination: string;
  mainsubjects: string;
  duration: string;
  yearofpassing: string;
  nameofschool: string;
  nameofboard: string;
  markscgpa: string;
  marks: string;
}

export interface otherqualification {
  slno: string;
  name: string;
  description: string;
  duration: string;
  nameofschoolandcollege: string;
}

export interface researchpapers {
  slno: string;
  publicationtype: string;
  titleofpaper: string;
  journalname: string;
  issn: string;
  author: string;
  year: string;
}

export interface reteriveworkexperience {
  workexperience: Array<any>;
}
export interface workexperience {
  slno: string;
  nameofemployer: string;
  postheld: string;
  enddate: string;
  iscurrentorganization: boolean;
  typeoforganization: string;
  naturofwork: string;
  startdata: string;
}

export interface reteriveuploadeddocuments {
  details: Array<any>;
}


export interface fetchdownloaddetails {

  personaldetails: reterivePersonalDetails;
  educationalqualifications: reteriveEducationalQualificationDetails;
  profileworkexperience: reteriveworkexperience;
  otrdocuments: reteriveuploadeddocuments;
  applypost: reteriveapplyposts;
  applypostfinaldata: reteriveapplypostfinaldata;
  paymentdetails: reterivePayementDetails;
  oldpaymentdetails: reteriveoldpaymentdetails;

}

export interface reteriveoldpaymentdetails {
  slno: number;
  employeeid: number;
  postid: number;
  booleanforoldpayment: number;
  oldGRNnumber: number;
}

export interface reterivePayementDetails {
  entry_date: string,
  prn: string,
  grn: string,
  amount: string,
  status: string
}

export interface reteriveapplyposts {
  personaldetails: reteriveapplypostuserdata
  educationqualification: reteriveapplyposteducationdetails
  workexperiences: reteriveapplypostworkexperience
  documentupload: reteriveapplypostdocumentupload;
  dynamicoptionsarray: reteriveapplypostdynamicoptions;
}

export interface reteriveapplypostdynamicoptions {
  employeeid: string
  postid: string
  questionid: string
  question: string
  answertype: String
  answer: string
}
export interface reteriveapplyposteducationdetails {
  employeeid: string
  postid: string
  degree: string
  division: string
  percentage: string
  duration: string
  yop: string
  subject: string
  nameofschool: string
  nameofboard: string
  documentupload: string
}

export interface reteriveapplypostworkexperience {

  slno: number
  employeeid: string
  postid: string
  experiencetype: string
  nameofemployer: string
  naturofwork: string
  postheld: string
  startdata: string
  enddate: string
  iscurrentorganization: string
  typeoforganization: string
  documentupload: string
}
export interface reteriveapplypostdocumentupload {
  slno: number
  employeeid: string
  postid: string
  certificatetype: string
  certificatename: string
  issuedate: string
  issueauthority: string
  filelocation: string
}


export interface reteriveapplypostfinaldata {

  slno: string,
  postid: string,
  employeeid: string,
  postname: string,
  applicationid: string,
  paymentstatus: string

}

export interface reteriveapplypostuserdata {
  postid: number;
  postname: string;
  employeeid: number;
  examinationzone: string;
  presentaddress: string;
  country: string;
  age: string
  state: string;
  district: string;
  pincode: string;
  submitteddate: string;
  cardeposition: string
  currentposition: string
  scribe: string
  typeofscribe: string

}



export interface Paymentsuccessdetails {
  paymentdate: string
  refno: string,
  grnno: string,
  amount: string,
  status: string
}
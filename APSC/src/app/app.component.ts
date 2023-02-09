import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js'
import { MasterServiceService } from '../app/MasterServiceService';
import { ActivatedRoute } from '@angular/router'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  finaldata: any

  condition: boolean = false


  showData: boolean = false

  profileimage: any;
  signatureimage: any;

  dataLoaded: boolean = false

  postid: any
  employeeid: any

  paymentresult: any

  whitespacearraynext: any
  booleanforoldpaymentdetailsformvc: boolean = false

  submittedDate: any


  othercount: any;
  researchcount: any

  conditionforOther: boolean = false
  conditionforResearch: boolean = false

  // html2pdf: any


  @ViewChild('pdfTable', { static: false }) pdfTable: ElementRef | undefined;
  @Input() previewdata: any;

  scribeinput: boolean | undefined
  whitspacearray: any
  whitespacearray1: any
  dummy: any

  constructor(
    private serviceObj: MasterServiceService, private route: ActivatedRoute) {

    console.log(" Inside Constructor .. ")

  }
  ngOnInit(): void {

    console.log(" Ng Openend in Angular")

    //  this.fetchdownloaddetails()

    this.route.queryParams
      .subscribe(params => {

        console.log(" Inside Route ");

        this.postid = params['postid']
        this.employeeid = params['employeeid']

        if (this.postid != undefined && this.employeeid != undefined) {
          console.log(" POst ID ", this.postid);
          console.log(" Employee ID  ", this.employeeid);

          this.fetchdownloaddetails()
        }
        else {
          console.log(" Undefiend ")
        }

      }
      );
  }

  fetchdownloaddetails() {


    this.showData = false
    console.log(" Download Details ", this.showData)


    this.serviceObj.fetchpaymentsuccessdetails(this.postid, this.employeeid).subscribe((res) => {

      console.log(" Res ", res)
      this.paymentresult = res
    })

    if (this.previewdata == '41') {
      this.booleanforoldpaymentdetailsformvc = true
    }
    else {
      this.booleanforoldpaymentdetailsformvc = false
    }

    this.serviceObj.fetchdownloadetails(this.postid, this.employeeid).subscribe((res) => {

      console.log(" Res ", res)
      this.finaldata = res

      this.showData = true

      console.log(" After Fetched ", this.showData)

      //this.submittedDate = this.finaldata.applypost.personaldetails.submitteddate.split('-').reverse().join('-')
      if (this.finaldata.applypost.personaldetails.scribe == 'true') {
        this.scribeinput = true
      }
      else {
        this.scribeinput = false
      }

      this.profileimage = 'data:image/jpg;base64,' + this.finaldata.personaldetails.photo
      this.signatureimage = 'data:image/jpg;base64,' + this.finaldata.personaldetails.signature

      this.othercount = this.finaldata.educationalqualifications
        .postgraduation.length + this.finaldata.educationalqualifications
          .undergraduationdetails.length + this.finaldata.educationalqualifications
            .schoolingdetails.length

    })

  }

  downloadPDF = () => {
    var element = document.getElementById('pdfTable')
    var opt = {
      margin: 0,
      filename: this.finaldata.applypostfinaldata.applicationid + '.pdf',
      image: { type: 'jpeg', quality: 0.95, },
      html2canvas: { dpi: 192, letterRendering: true, scale: 4 },
      jsPDF: { unit: "mm", format: "a4", orientation: "p" }
    };
    html2pdf().from(element).set(opt).save();
  }


  whendownloadbuttonclickfrompopup() {
    this.condition = true
    this.downloadPDF()
  }


}


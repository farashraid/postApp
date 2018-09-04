import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { NgxSmartLoaderService } from "ngx-smart-loader";
@Component({
  selector: "app-gender-select",
  templateUrl: "./gender-select.component.html",
  styleUrls: ["./gender-select.component.less"]
})
export class GenderSelectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public loader: NgxSmartLoaderService,
    private cdr: ChangeDetectorRef
  ) {}
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  ngOnInit() {
    this.loader.start("myLoader");
  }
  toggleImage(id) {
    this.router.navigate(["clothes"], {
      queryParams: { id: id, obj: "", url: "home" }
    });
  }
}

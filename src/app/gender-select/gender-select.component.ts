import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
@Component({
  selector: "app-gender-select",
  templateUrl: "./gender-select.component.html",
  styleUrls: ["./gender-select.component.less"]
})
export class GenderSelectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,

  ) {}
  public loading = false;
  ngAfterViewInit() {
    this.cdr.detectChanges();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
  ngOnInit() {
    this.loading = true;
  }
  toggleImage(id) {
    this.router.navigate(["clothes"], {
      queryParams: { id: id, obj: "", url: "home" }
    });
  }
}

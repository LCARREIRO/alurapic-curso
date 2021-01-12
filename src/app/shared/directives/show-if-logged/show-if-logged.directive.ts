import { UserService } from './../../../core/user/user.service';
import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

  public currentDisplay: string;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.currentDisplay = getComputedStyle(this.element.nativeElement).display;

    this.userService.getUser().subscribe(user => {
      if(user) {
        this.renderer.setElementStyle(this.element.nativeElement, 'display', this.currentDisplay);
      } else {
        this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
      }
    });
  }
}

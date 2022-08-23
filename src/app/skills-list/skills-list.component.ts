import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {

  @Input () skills: Array<any> = new Array <any> ();
  
  constructor() { }

  ngOnInit() {
    this.skills.push ({
      title: "Angular",
      skill: 7
    });
    this.skills.push ({
      title: "HTML",
      skill: 9
    });
    this.skills.push ({
      title: "CSS",
      skill: 8
    });
  }

}

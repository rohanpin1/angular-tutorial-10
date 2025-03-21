import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profiles',
  imports: [],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.scss'
})
export class ProfilesComponent {
  username: string | null = ""
  collegeName : any= ""
  city: any = ""
  constructor(private route:ActivatedRoute){

  }

  ngOnInit(){
    let name = this.route.snapshot.paramMap.get('name')
    console.log(name)
    this.username = name

    this.route.queryParams.subscribe(paramss =>{
      this.collegeName = paramss['college']
      this.city = paramss['city']
    })
  }
}

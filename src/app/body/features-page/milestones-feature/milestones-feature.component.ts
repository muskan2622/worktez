/*********************************************************** 
* Copyright (C) 2022 
* Worktez 
* Author : Abhishek Mishra <am1426620@gmail.com>
* 
* This program is free software; you can redistribute it and/or 
* modify it under the terms of the MIT License 
* 
* 
* This program is distributed in the hope that it will be useful, 
* but WITHOUT ANY WARRANTY; without even the implied warranty of 
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
* See the MIT License for more details. 
***********************************************************/
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-milestones-feature',
  templateUrl: './milestones-feature.component.html',
  styleUrls: ['./milestones-feature.component.css',  '../features-page.component.css']
})
export class MilestonesFeatureComponent implements OnInit {

  constructor(public router: Router, private titleService: Title, private metaTagService: Meta ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Features - Milestones");
    this.metaTagService.updateTag(
      {
        name: 'description',
        content: 'Create a milestone for bigger implementations. Plan and track your progress on a functionality that might include multiple tasks using milestones.',
      });
  }
}

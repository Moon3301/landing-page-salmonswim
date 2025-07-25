import { Component, OnInit } from '@angular/core';
import { Schedule } from '../../../../core/models/swimming.models';
import { SwimmingService } from '../../../../core/services/swimming.service';

@Component({
  selector: 'home-schedule',
  standalone: false,
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedules: Schedule[] = [];

  constructor(private swimmingService: SwimmingService) {}

  ngOnInit() {
    this.swimmingService.getSchedules().subscribe(schedules => {
      this.schedules = schedules;
    });
  }

  getAvailabilityClass(schedule: Schedule): string {
    const percentage = schedule.availableSpots / schedule.totalSpots;

    if (schedule.availableSpots === 0) return 'none';
    if (percentage <= 0.25) return 'low';
    if (percentage <= 0.5) return 'medium';
    return 'high';
  }

  getAvailabilityText(schedule: Schedule): string {
    if (schedule.availableSpots === 0) return 'Agotado';
    if (schedule.availableSpots === 1) return 'Último cupo';
    if (schedule.availableSpots <= 2) return 'Pocos cupos';
    return 'Disponible';
  }
}

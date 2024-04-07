import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent {

  bookings: any;
  isSpinning: boolean = false;

  constructor(private customerService: CustomerService){
    this.getMyBookings();
  }

  getMyBookings() {
    this.isSpinning = true;
    this.customerService.getBookingsByUserId().subscribe((res) => {
      this.isSpinning = false;
      this.bookings = res;
    })
  }

}

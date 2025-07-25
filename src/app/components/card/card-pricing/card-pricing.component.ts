import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: true, 
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent {

  @Input()
  gameType: string = 'Digital PS4';

  @Input()
  gamePrice: string = 'R$ 399,90';

}

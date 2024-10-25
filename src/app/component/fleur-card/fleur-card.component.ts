import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-fleur-card',
	standalone: true,
	imports: [],
	templateUrl: './fleur-card.component.html',
	styleUrl: './fleur-card.component.css'
})
export class FleurCardComponent {

	handleClick(fleur: any) {
		this.emitter.emit(fleur);
	}

	@Input()
	fleur: any;


	@Output("acheter")
	emitter = new EventEmitter();



}

import { Component } from '@angular/core';
import { FleurCardComponent } from "../fleur-card/fleur-card.component";
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-body',
	standalone: true,
	imports: [FleurCardComponent, CommonModule],
	templateUrl: './body.component.html',
	styleUrl: './body.component.css'
})
export class BodyComponent {

	yolo() {
		console.log('yolo');
	}

	supprimer(fleur: any) {
		console.log('Ce bouquet a été supprimé du panier :', fleur);
		this.panier = this.panier.filter((f) => f !== fleur);
	}

	acheter(fleur: any) {
		console.log('Ce bouquet a été ajouté au panier :', fleur);
		this.panier.push(fleur);
	}

	data = {
		nom: 'Rose',
		image: 'https://cdn.sanity.io/images/pn4rwssl/production/349d734442fdbcc734bd8060f126330fdf19e825-500x750.jpg?w=2880&q=75&auto=format',
		prix: 10,
		enStock: true,
		description: 'La rose est une fleur très belle'
	}

	fleurs = [
		{
			nom: 'Tulipe',
			image: 'https://example.com/tulipe.jpg',
			prix: 8,
			enStock: true,
			description: 'La tulipe est une fleur élégante'
		},
		{
			nom: 'Lys',
			image: 'https://static.aujardin.info/cache/th/img9/gaillardia-fleur-600x450.webp',
			prix: 12,
			enStock: false,
			description: 'Le lys est une fleur majestueuse'
		},
		{
			nom: 'Orchidée',
			image: 'https://example.com/orchidee.jpg',
			prix: 15,
			enStock: true,
			description: 'L\'orchidée est une fleur exotique'
		},
		{
			nom: 'Marguerite',
			image: 'https://example.com/marguerite.jpg',
			prix: 5,
			enStock: true,
			description: 'La marguerite est une fleur simple et belle'
		},
		{
			nom: 'Pivoine',
			image: 'https://example.com/pivoine.jpg',
			prix: 20,
			enStock: true,
			description: 'La pivoine est une fleur luxuriante'
		},
		{
			nom: 'Lavande',
			image: 'https://example.com/lavande.jpg',
			prix: 7,
			enStock: false,
			description: 'La lavande est une fleur parfumée'
		},
		{
			nom: 'Jasmin',
			image: 'https://example.com/jasmin.jpg',
			prix: 9,
			enStock: true,
			description: 'Le jasmin est une fleur délicate'
		},
		{
			nom: 'Hibiscus',
			image: 'https://example.com/hibiscus.jpg',
			prix: 11,
			enStock: true,
			description: 'L\'hibiscus est une fleur tropicale'
		},
		{
			nom: 'Camélia',
			image: 'https://example.com/camelia.jpg',
			prix: 13,
			enStock: false,
			description: 'Le camélia est une fleur raffinée'
		},
		{
			nom: 'Violette',
			image: 'https://example.com/violette.jpg',
			prix: 6,
			enStock: true,
			description: 'La violette est une fleur discrète'
		}
	];

	panier: any[] = [];
}

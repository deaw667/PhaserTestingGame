// Import the necessary assets
import assetPackUrl from "../../static/assets/asset-pack.json"; // Ensure this import is present
import DraggableImage from "../prefabs/DraggableImage"; // Add .ts extension

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");
	}

	editorCreate(): void {
		// fufuSuperDino
		this.add.image(640, 257, "FufuSuperDino");

		// text
		const text = this.add.text(640, 458, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Phaser 3 + Phaser Editor v4\nWebpack + TypeScript";
		text.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "3em" });

		this.events.emit("scene-awake");
	}

	create() {
		this.editorCreate();
		
		// Array of asset keys from the asset pack
		const assetKeys = [
			"shape1",
			"shape2",
			"shape3",
		];
	
		// Shuffle the asset keys
		Phaser.Utils.Array.Shuffle(assetKeys);
	
		const startX = 340; // Center the images horizontally
		const startY = 200; // Starting Y position
	
		// Create 4 draggable images
		for (let i = 0; i < 3; i++) {
			const randomKey = assetKeys[i]; // Get the first 4 shuffled keys
			const yPosition = startY + (i * 120); // Vertical spacing
	
			// Create an instance of DraggableImage
			const draggableImage = new DraggableImage(this, startX, yPosition, randomKey);
			this.add.existing(draggableImage); // Add the prefab to the scene
		}
	}
}
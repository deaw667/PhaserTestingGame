// src/prefabs/DraggableImage.ts
import Phaser from "phaser";

export default class DraggableImage extends Phaser.GameObjects.Image {
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
        super(scene, x, y, texture);
        
        // Set the scale to 0.5 to make the image appear at 50% of its original size
        this.setScale(0.5); // Scale the image down to 50% (0.5 for both x and y)
        this.setOrigin(0.5, 0.5); // Center the origin

        // Enable input and dragging
        this.setInteractive();
        scene.input.setDraggable(this);

        // Add hover effects
        this.on('pointerover', () => this.onHover());
        this.on('pointerout', () => this.onOut());
        this.on('drag', (pointer: Phaser.Input.Pointer) => this.onDrag(pointer));
    }

    private onHover() {
        this.scene.tweens.add({
            targets: this,
            scaleX: 0.7, // Scale up to 60% of original size (0.6 for 120% of 0.5)
            scaleY: 0.7, // Scale up to 60% of original size (0.6 for 120% of 0.5)
            duration: 200,
            ease: 'Power2',
        });
    }

    private onOut() {
        this.scene.tweens.add({
            targets: this,
            scaleX: 0.5, // Reset scale back to 50% (original size)
            scaleY: 0.5, // Reset scale back to 50% (original size)
            duration: 200,
            ease: 'Power2',
        });
    }

    private onDrag(pointer: Phaser.Input.Pointer) {
        this.x = pointer.x;
        this.y = pointer.y;
    }
}
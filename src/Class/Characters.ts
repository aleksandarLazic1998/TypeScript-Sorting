export class CharactersArray {
	constructor(public data: string) {}

	get length(): number {
		return this.data.length;
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		return (
			this.data[leftIndex].toLocaleLowerCase() >
			this.data[rightIndex].toLocaleLowerCase()
		);
	}

	swap(leftIndex: number, rightIndex: number): void {
		// Split String in to the Array to implement Bubble Sorting
		const characters = this.data.split("");

		const leftSide = characters[leftIndex];
		characters[leftIndex] = characters[rightIndex];
		characters[rightIndex] = leftSide;

		// Return Array in to the String to implement show sorted Data
		this.data = characters.join("");
	}
}

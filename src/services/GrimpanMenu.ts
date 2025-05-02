import { ChromeGrimpan, GrimpanBase, IEGrimpan } from "./Grimpan";

export abstract class GrimpanMenu {
	public static getInstance(_grimpan: GrimpanBase) {}

	protected constructor(public readonly grimpan: GrimpanBase) {}

	public abstract initialize(): void;
}

export class IEGrimpanMenu extends GrimpanMenu {
	private static instance: IEGrimpanMenu | null = null;

	public static override getInstance(grimpan: IEGrimpan) {
		if (!this.instance) {
			this.instance = new IEGrimpanMenu(grimpan);
		}

		return this.instance;
	}

	private constructor(grimpan: IEGrimpan) {
		super(grimpan);
	}

	public override initialize() {
		console.log("[IEGrimpanMenu] create instance");
	}
}

export class ChromeGrimpanMenu extends GrimpanMenu {
	private static instance: ChromeGrimpanMenu | null = null;

	public static override getInstance(grimpan: ChromeGrimpan) {
		if (!this.instance) {
			this.instance = new ChromeGrimpanMenu(grimpan);
		}

		return this.instance;
	}

	private constructor(grimpan: ChromeGrimpan) {
		super(grimpan);
	}

	public override initialize() {
		console.log("[ChromeGrimpanMenu] create instance");
	}
}

import { ChromeGrimpan, GrimpanBase, IEGrimpan } from "./Grimpan";

export abstract class GrimpanHistory {
	public static getInstance(_grimpan: GrimpanBase) {}

	protected constructor(public readonly grimpan: GrimpanBase) {}

	public abstract initialize(): void;
}

export class IEGrimpanHistory extends GrimpanHistory {
	private static instance: IEGrimpanHistory | null = null;

	public static override getInstance(grimpan: IEGrimpan) {
		if (!this.instance) {
			this.instance = new IEGrimpanHistory(grimpan);
		}

		return this.instance;
	}

	private constructor(grimpan: IEGrimpan) {
		super(grimpan);
	}

	public override initialize() {
		console.log("[IEGrimpanHistory] create instance");
	}
}

export class ChromeGrimpanHistory extends GrimpanHistory {
	private static instance: ChromeGrimpanHistory | null = null;

	public static override getInstance(grimpan: ChromeGrimpan) {
		if (!this.instance) {
			this.instance = new ChromeGrimpanHistory(grimpan);
		}

		return this.instance;
	}

	private constructor(grimpan: ChromeGrimpan) {
		super(grimpan);
	}

	public override initialize() {
		console.log("[ChromeGrimpanHistory] create instance");
	}
}

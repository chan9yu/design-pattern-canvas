export abstract class GrimpanBase {
	public static getInstance(_canvas: HTMLCanvasElement) {}

	protected constructor(protected readonly canvas: HTMLCanvasElement | null) {
		if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
			throw new Error("Canvas element is required");
		}
	}

	public abstract initialize(): void;
}

export class ChromeGrimpan extends GrimpanBase {
	private static instance: ChromeGrimpan | null = null;

	public static getInstance(canvas: HTMLCanvasElement) {
		if (!ChromeGrimpan.instance) {
			ChromeGrimpan.instance = new ChromeGrimpan(canvas);
		}

		return ChromeGrimpan.instance;
	}

	private constructor(canvas: HTMLCanvasElement) {
		super(canvas);
	}

	public override initialize() {
		console.log("[ChromeGrimpan] create instance");
	}
}

export class IEGrimpan extends GrimpanBase {
	private static instance: IEGrimpan | null = null;

	public static getInstance(canvas: HTMLCanvasElement) {
		if (!IEGrimpan.instance) {
			IEGrimpan.instance = new IEGrimpan(canvas);
		}

		return IEGrimpan.instance;
	}

	private constructor(canvas: HTMLCanvasElement) {
		super(canvas);
	}

	public override initialize() {
		console.log("[IEGrimpan] create instance");
	}
}

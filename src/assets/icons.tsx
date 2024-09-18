
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLProps } from "react";

// const fillCurrent = "fill-primary";
const strokeWidth = "1.5";
// const fillRed = "#EF4444";
// const fillGreen = "fill-green-600";

const iconVariants = cva("", {
	variants: {
		variant: {
			default: "text-secundary",
			primary: "text-primary",
		},
		size: {
			default: "",
			sm: "w-4 h-4",
			md_sm: "w-[1.4rem] h-[1.4rem]",
			md: "w-6 h-6",
			lg: "w-8 h-8",
			xLg: "w-10 h-10",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "md",
	},
});

interface IPropsIcon extends Omit<HTMLProps<SVGSVGElement>, "size">, VariantProps<typeof iconVariants> {}

const IconAdd = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M11.8125 8.99954H9M9 8.99954H6.1875M9 8.99954V11.812M9 8.99954L9 6.18704M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
			/>
		</svg>
	);
};

const IconMargaridaHorizontalAlt = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			id="Layer_1"
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1920 1080"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<defs>
				<style>
					{`
			  .cls-1{font-size:45.53px;font-family:UniviaPro-Light, Univia Pro;font-weight:300;}
			  .cls-1,.cls-5{fill:#2b3975;}
			  .cls-2{letter-spacing:-0.01em;}
			  .cls-3{letter-spacing:-0.01em;}
			  .cls-4{letter-spacing:0em;}
			  .cls-6{fill:#ffc200;}
			`}
				</style>
			</defs>
			<title>LogoHorizontal</title>
			<text className="cls-1" transform="translate(766 639.83)">
				distribuido
				<tspan className="cls-2" x="206.33" y="0">
					r
				</tspan>
				<tspan x="220.76" y="0">
					a e ope
				</tspan>
				<tspan className="cls-3" x="364.76" y="0">
					r
				</tspan>
				<tspan className="cls-4" x="379.19" y="0">
					ado
				</tspan>
				<tspan className="cls-2" x="453.22" y="0">
					r
				</tspan>
				<tspan x="467.65" y="0">
					a logística
				</tspan>
			</text>
			<path
				className="cls-5"
				d="M857.57,484.2H829a11.55,11.55,0,0,0-7.83,3.05,26.45,26.45,0,0,0-12.34-3H768.57l0,78.33a5.83,5.83,0,0,0,5.83,5.82h6.26a5.83,5.83,0,0,0,5.82-5.83l0-60.42h22.3a8.59,8.59,0,0,1,8.59,8.58v51.84a5.82,5.82,0,0,0,5.82,5.82h6.27a5.81,5.81,0,0,0,5.81-5.82V502.12h22.3a8.58,8.58,0,0,1,8.58,8.57l0,51.85a5.83,5.83,0,0,0,5.82,5.82h6.26a5.83,5.83,0,0,0,5.82-5.83V510.68A26.49,26.49,0,0,0,857.57,484.2Z"
			/>
			{/* Outros elementos do SVG */}
		</svg>
	);
};

const IconHelp = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
				stroke="#475467"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.09009 9.00002C9.32519 8.33169 9.78924 7.76813 10.4 7.40915C11.0108 7.05018 11.729 6.91896 12.4273 7.03873C13.1255 7.15851 13.7589 7.52154 14.2152 8.06355C14.6714 8.60555 14.9211 9.29154 14.9201 10C14.9201 12 11.9201 13 11.9201 13"
				stroke="#475467"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 17H12.01"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconAlertCicle = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M12 12V7.5M12 15.3354V15.375M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconAlertError = ({ ...props }: IPropsIcon) => {
	return (
		<svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M49.38 35.3167L32.7616 7.75665C32.0896 6.70542 31.1638 5.84029 30.0695 5.24102C28.9752 4.64175 27.7476 4.32764 26.5 4.32764C25.2523 4.32764 24.0247 4.64175 22.9304 5.24102C21.8361 5.84029 20.9103 6.70542 20.2383 7.75665L3.61995 35.3167C3.0329 36.2952 2.71383 37.4111 2.69481 38.5521C2.67579 39.6931 2.9575 40.819 3.51162 41.8167C4.15226 42.9396 5.07955 43.8722 6.19872 44.5194C7.3179 45.1665 8.58882 45.5049 9.88162 45.5H43.1183C44.4026 45.5137 45.6678 45.1884 46.7862 44.5569C47.9046 43.9254 48.8367 43.0101 49.4883 41.9033C50.0587 40.8953 50.3494 39.7533 50.3303 38.5952C50.3113 37.4372 49.9832 36.3053 49.38 35.3167ZM26.5 36.8333C26.0714 36.8333 25.6525 36.7063 25.2962 36.4682C24.9399 36.2301 24.6622 35.8917 24.4982 35.4958C24.3342 35.0999 24.2913 34.6643 24.3749 34.244C24.4585 33.8237 24.6649 33.4376 24.9679 33.1346C25.2709 32.8316 25.657 32.6252 26.0773 32.5416C26.4975 32.458 26.9332 32.5009 27.3291 32.6649C27.725 32.8289 28.0634 33.1066 28.3015 33.4629C28.5395 33.8192 28.6666 34.2381 28.6666 34.6667C28.6666 35.2413 28.4383 35.7924 28.032 36.1987C27.6257 36.6051 27.0746 36.8333 26.5 36.8333ZM28.6666 28.1667C28.6666 28.7413 28.4383 29.2924 28.032 29.6987C27.6257 30.105 27.0746 30.3333 26.5 30.3333C25.9253 30.3333 25.3742 30.105 24.9679 29.6987C24.5616 29.2924 24.3333 28.7413 24.3333 28.1667V19.5C24.3333 18.9254 24.5616 18.3743 24.9679 17.9679C25.3742 17.5616 25.9253 17.3333 26.5 17.3333C27.0746 17.3333 27.6257 17.5616 28.032 17.9679C28.4383 18.3743 28.6666 18.9254 28.6666 19.5V28.1667Z"
				fill="currentColor"
			/>
		</svg>
	);
};

const IconArrow = ({ ...props }: IPropsIcon) => {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				d="M14 7L9.42 12.0008L14 17"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconArrowSmall = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="12"
			height="6"
			viewBox="0 0 12 6"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				id="Vector"
				d="M1 0.5L6 5.5L11 0.5"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconBell = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<g id="bell-03">
				<path
					id="Icon"
					d="M4.10557 18.1074L3.51021 17.6513H3.51021L4.10557 18.1074ZM5.26855 14.8377L4.51855 14.8285V14.8377H5.26855ZM5.29296 12.8609L6.04296 12.8701V12.8609H5.29296ZM19.9006 18.1233L20.5051 17.6792L20.5051 17.6792L19.9006 18.1233ZM18.7814 14.8377L18.0314 14.828V14.8377H18.7814ZM18.8058 12.9588L19.5558 12.9686V12.9588H18.8058ZM4.70094 18.5635C5.35975 17.7036 6.01855 16.4143 6.01855 14.8377H4.51855C4.51855 15.9897 4.03497 16.9663 3.51021 17.6513L4.70094 18.5635ZM6.0185 14.847L6.0429 12.8701L4.54302 12.8516L4.51861 14.8285L6.0185 14.847ZM20.5051 17.6792C20.0025 16.9952 19.5314 16.0083 19.5314 14.8377H18.0314C18.0314 16.4145 18.6633 17.7058 19.2962 18.5673L20.5051 17.6792ZM19.5314 14.8475L19.5558 12.9686L18.0559 12.9491L18.0315 14.828L19.5314 14.8475ZM19.5558 12.9588C19.5558 8.81165 16.167 5.46053 12 5.46053V6.96053C15.3506 6.96053 18.0558 9.65205 18.0558 12.9588H19.5558ZM19.4933 19.7894C20.09 19.7894 20.4749 19.3735 20.6343 19.0024C20.7925 18.6337 20.8217 18.1102 20.5051 17.6792L19.2962 18.5673C19.2601 18.5182 19.2515 18.4728 19.2502 18.4503C19.249 18.4296 19.2527 18.418 19.2559 18.4106C19.2588 18.4038 19.2706 18.3793 19.3065 18.3514C19.3473 18.3196 19.4136 18.2894 19.4933 18.2894V19.7894ZM6.04296 12.8609C6.04296 9.60819 8.70401 6.96053 12 6.96053V5.46053C7.88761 5.46053 4.54296 8.76779 4.54296 12.8609H6.04296ZM4.50763 18.2894C4.58934 18.2894 4.65666 18.3209 4.69713 18.353C4.73249 18.3811 4.74312 18.4049 4.74524 18.41C4.74762 18.4157 4.75108 18.4259 4.74969 18.4458C4.74816 18.4676 4.73905 18.5138 4.70094 18.5635L3.51021 17.6513C3.17975 18.0826 3.20559 18.6145 3.36048 18.9865C3.5162 19.3605 3.90116 19.7894 4.50763 19.7894V18.2894ZM19.4933 18.2894H4.50763V19.7894H19.4933V18.2894ZM14.45 19.0395C14.45 20.2064 13.4091 21.25 12 21.25V22.75C14.1255 22.75 15.95 21.1426 15.95 19.0395H14.45ZM12 21.25C10.5909 21.25 9.55 20.2064 9.55 19.0395H8.05C8.05 21.1426 9.87447 22.75 12 22.75V21.25ZM13.3833 4.10526C13.3833 4.84442 12.7734 5.46053 12 5.46053V6.96053C13.583 6.96053 14.8833 5.69152 14.8833 4.10526H13.3833ZM12 5.46053C11.2266 5.46053 10.6167 4.84442 10.6167 4.10526H9.11667C9.11667 5.69152 10.417 6.96053 12 6.96053V5.46053ZM10.6167 4.10526C10.6167 3.36611 11.2266 2.75 12 2.75V1.25C10.417 1.25 9.11667 2.51901 9.11667 4.10526H10.6167ZM12 2.75C12.7734 2.75 13.3833 3.36611 13.3833 4.10526H14.8833C14.8833 2.51901 13.583 1.25 12 1.25V2.75Z"
					fill="currentColor"
				/>
			</g>
		</svg>
	);
};

const IconCamera = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="225"
			height="225"
			viewBox="0 0 225 225"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
			fill="none"
		>
			<rect width="225" height="225" fill="url(#pattern0)" />
			<defs>
				<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
					<use xlinkHref="#image0_283_2234" transform="scale(0.00444444)" />
				</pattern>
				<image
					id="image0_283_2234"
					width="225"
					height="225"
					xlinkHref="data:image/jpeg;base64,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"
				/>
			</defs>
		</svg>
	);
};

const IconClose = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M1.22224 1.3335L14.5556 14.6668"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M1.22224 14.6668L14.5556 1.3335"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconCloud03 = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M12.8 15.6C11.7065 15.6 10 15.6 10 15.6H7.6C7.6 15.6 6.65625 15.6 6 15.6C3.79063 15.6 2 13.809 2 11.6C2 9.78555 3.20781 8.25274 4.86406 7.76328C5.72813 5.7836 7.70313 4.4 10 4.4C12.8516 4.4 15.2063 6.53242 15.5547 9.28985C16.9578 9.6293 18 10.893 18 12.4C18 14.1672 16.5672 15.6 14.8 15.6C14.0281 15.6 13.581 15.6 12.8 15.6Z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconCloud = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M5.4 18H11.4M10.2 21.6H16.2M16.2 18H19.8M21 8.40002C21 11.7137 18.3137 14.4 15 14.4C13.5438 14.4 11.4 14.4 11.4 14.4C11.4 14.4 9.11306 14.4 7.8 14.4C5.14903 14.4 3 12.251 3 9.60002C3 6.94906 5.14903 4.80002 7.8 4.80002C8.54469 4.80002 9.24977 4.96961 9.87873 5.27227C10.9331 3.54955 12.8323 2.40002 15 2.40002C18.3137 2.40002 21 5.08632 21 8.40002Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
const IconDoc = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="40"
			height="46"
			viewBox="0 0 40 46"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
			fill="none"
		>
			<g filter="url(#filter0_dd_231_2231)">
				<mask
					id="mask0_231_2231"
					style={{ maskType: "luminance" }}
					maskUnits="userSpaceOnUse"
					x="5"
					y="1"
					width="30"
					height="36"
				>
					<path
						d="M26.2525 1.00015H8.66428C6.64062 1.00015 5 2.6408 5 4.66443V32.513C5 34.5366 6.64062 36.1772 8.66428 36.1772H30.65C32.6736 36.1772 34.3142 34.5366 34.3142 32.513V9.06157L26.2525 1.00015Z"
						fill="white"
					/>
				</mask>
				<g mask="url(#mask0_231_2231)">
					<mask
						id="mask1_231_2231"
						style={{ maskType: "luminance" }}
						maskUnits="userSpaceOnUse"
						x="5"
						y="1"
						width="30"
						height="14"
					>
						<path d="M5 14.1919H34.314V1.00078H5V14.1919Z" fill="white" />
					</mask>
					<g mask="url(#mask1_231_2231)">
						<path
							d="M8.66419 35.8115C6.8455 35.8115 5.36633 34.3321 5.36633 32.5137V4.66514C5.36633 2.84649 6.8455 1.36729 8.66419 1.36729H26.1007L33.9477 9.21398V32.5137C33.9477 34.3321 32.4683 35.8115 30.6499 35.8115H8.66419Z"
							fill="#3098D8"
						/>
						<path
							d="M26.2525 1.00064H8.66428C6.64062 1.00064 5 2.64129 5 4.66492V32.5135C5 34.5371 6.64062 36.1777 8.66428 36.1777H30.65C32.6736 36.1777 34.3142 34.5371 34.3142 32.5135V9.06206L26.2525 1.00064ZM25.9491 1.7335L33.5814 9.36553V32.5135C33.5814 34.1297 32.2663 35.4449 30.65 35.4449H8.66428C7.04799 35.4449 5.73286 34.1297 5.73286 32.5135V4.66492C5.73286 3.04861 7.04799 1.7335 8.66428 1.7335H25.9491Z"
							fill="#2C8AC4"
						/>
						<path d="M27.3045 7.96457L34.398 15.0581V7.96457H27.3045Z" fill="#2C8AC4" />
						<path
							d="M34.3142 9.06201H29.917C27.8934 9.06201 26.2527 7.42137 26.2527 5.39773V1.0006H34.3142V9.06201Z"
							fill="#97CCEC"
						/>
					</g>
				</g>
				<mask
					id="mask2_231_2231"
					style={{ maskType: "luminance" }}
					maskUnits="userSpaceOnUse"
					x="5"
					y="1"
					width="30"
					height="36"
				>
					<path
						d="M26.2525 1.00015H8.66428C6.64062 1.00015 5 2.6408 5 4.66443V32.513C5 34.5366 6.64062 36.1772 8.66428 36.1772H30.65C32.6736 36.1772 34.3142 34.5366 34.3142 32.513V9.06157L26.2525 1.00015Z"
						fill="white"
					/>
				</mask>
				<g mask="url(#mask2_231_2231)">
					<path
						d="M9.99143 6.36508V8.97705H10.3521C10.7257 8.97705 11.0327 8.87482 11.2734 8.67101C11.5139 8.46691 11.6341 8.1265 11.6341 7.64985C11.6341 7.37305 11.576 7.12799 11.4601 6.91443C11.3441 6.70058 11.1761 6.55577 10.9562 6.47933C10.7358 6.40319 10.5259 6.36508 10.3264 6.36508H9.99143ZM9.07367 5.56642H10.5165C11.1326 5.56642 11.6286 5.76077 12.0042 6.14926C12.3801 6.53774 12.5679 7.04986 12.5679 7.6854C12.5679 8.3232 12.3738 8.83422 11.9868 9.21838C11.5989 9.60284 11.0833 9.79492 10.4392 9.79492H9.07367V5.56642Z"
						fill="white"
					/>
					<path
						d="M15.2731 6.36483C14.919 6.35824 14.6333 6.48077 14.4163 6.73185C14.1996 6.98322 14.0911 7.30729 14.0911 7.70457C14.0911 8.08016 14.2019 8.39162 14.4229 8.63844C14.6442 8.88549 14.923 9.00883 15.2602 9.00883C15.6146 9.00883 15.9003 8.88718 16.1185 8.64299C16.3363 8.39997 16.4454 8.07818 16.4454 7.67884C16.4454 7.28581 16.3383 6.97032 16.1248 6.73185C15.9112 6.49367 15.6275 6.37113 15.2731 6.36483ZM13.1412 7.67884C13.1412 7.05394 13.3476 6.5383 13.7607 6.13127C14.1741 5.72446 14.6645 5.52095 15.2313 5.52095C15.8582 5.52095 16.3766 5.72534 16.7866 6.13471C17.1969 6.5435 17.4018 7.06046 17.4018 7.68514C17.4018 8.3058 17.1988 8.82107 16.7932 9.23103C16.3876 9.64121 15.8763 9.84619 15.2602 9.84619C14.6442 9.84619 14.1366 9.64238 13.7387 9.2344C13.3402 8.8262 13.1412 8.30778 13.1412 7.67884Z"
						fill="white"
					/>
					<path
						d="M21.3212 5.79149V6.82203C20.864 6.54721 20.4635 6.4098 20.12 6.4098C19.7764 6.4098 19.5016 6.52808 19.2955 6.76421C19.0894 7.00041 18.9864 7.31818 18.9864 7.71751C18.9864 8.09537 19.0948 8.39767 19.3115 8.62383C19.5285 8.85058 19.8182 8.96366 20.1812 8.96366C20.499 8.96366 20.8792 8.83599 21.3212 8.58067V9.60461C20.8254 9.77009 20.412 9.85254 20.0813 9.85254C19.5125 9.85254 19.0293 9.64411 18.6322 9.22646C18.2349 8.80881 18.0365 8.29925 18.0365 7.69809C18.0365 7.0863 18.2386 6.56846 18.6431 6.14392C19.0479 5.72018 19.5402 5.50809 20.12 5.50809C20.4935 5.50809 20.8941 5.60256 21.3212 5.79149Z"
						fill="white"
					/>
				</g>
				<mask
					id="mask3_231_2231"
					style={{ maskType: "luminance" }}
					maskUnits="userSpaceOnUse"
					x="5"
					y="1"
					width="30"
					height="36"
				>
					<path
						d="M26.2525 1.00015H8.66428C6.64062 1.00015 5 2.6408 5 4.66443V32.513C5 34.5366 6.64062 36.1772 8.66428 36.1772H30.65C32.6736 36.1772 34.3142 34.5366 34.3142 32.513V9.06157L26.2525 1.00015Z"
						fill="white"
					/>
				</mask>
				<g mask="url(#mask3_231_2231)">
					<mask
						id="mask4_231_2231"
						style={{ maskType: "luminance" }}
						maskUnits="userSpaceOnUse"
						x="5"
						y="14"
						width="30"
						height="23"
					>
						<path d="M5 36.1772H34.3142V14.1916H5V36.1772Z" fill="white" />
					</mask>
					<g mask="url(#mask4_231_2231)">
						<path
							d="M8.66419 35.811C6.8455 35.811 5.36633 34.3316 5.36633 32.5132V4.66465C5.36633 2.84622 6.8455 1.3668 8.66419 1.3668H26.1007L33.9477 9.21349V32.5132C33.9477 34.3316 32.4683 35.811 30.6499 35.811H8.66419Z"
							fill="#F6F6F6"
						/>
						<path
							d="M26.2525 1.00015H8.66428C6.64062 1.00015 5 2.6408 5 4.66443V32.513C5 34.5366 6.64062 36.1772 8.66428 36.1772H30.65C32.6736 36.1772 34.3142 34.5366 34.3142 32.513V9.06157L26.2525 1.00015ZM25.9491 1.73301L33.5814 9.36505V32.513C33.5814 34.1293 32.2663 35.4444 30.65 35.4444H8.66428C7.04799 35.4444 5.73286 34.1293 5.73286 32.513V4.66443C5.73286 3.04812 7.04799 1.73301 8.66428 1.73301H25.9491Z"
							fill="#E0E0E0"
						/>
						<path
							d="M28.8176 20.7876H10.8626C10.2554 20.7876 9.76331 20.2955 9.76331 19.6883C9.76331 19.0811 10.2554 18.589 10.8626 18.589H28.8176C29.4247 18.589 29.9168 19.0811 29.9168 19.6883C29.9168 20.2955 29.4247 20.7876 28.8176 20.7876Z"
							fill="#D8D8D8"
						/>
						<path
							d="M28.8176 25.1846H10.8626C10.2554 25.1846 9.76331 24.6925 9.76331 24.0853C9.76331 23.4781 10.2554 22.986 10.8626 22.986H28.8176C29.4247 22.986 29.9168 23.4781 29.9168 24.0853C29.9168 24.6925 29.4247 25.1846 28.8176 25.1846Z"
							fill="#D8D8D8"
						/>
						<path
							d="M21.1228 29.5815H10.8628C10.2556 29.5815 9.76349 29.0894 9.76349 28.4823C9.76349 27.8751 10.2556 27.383 10.8628 27.383H21.1228C21.7299 27.383 22.222 27.8751 22.222 28.4823C22.222 29.0894 21.7299 29.5815 21.1228 29.5815Z"
							fill="#D8D8D8"
						/>
					</g>
				</g>
			</g>
			<defs>
				<filter
					id="filter0_dd_231_2231"
					x="0"
					y="0.000976562"
					width="39.3142"
					height="45.1763"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_231_2231" />
					<feOffset dy="2" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
					/>
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_231_2231" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_231_2231" />
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="3" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
					/>
					<feBlend mode="normal" in2="effect1_dropShadow_231_2231" result="effect2_dropShadow_231_2231" />
					<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_231_2231" result="shape" />
				</filter>
			</defs>
		</svg>
	);
};
const IconDocDefault = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="205"
			height="252"
			viewBox="0 0 205 252"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
			fill="none"
		>
			<rect width="205" height="252" fill="url(#pattern0)" />
			<defs>
				<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
					<use xlinkHref="#image0_235_11077" transform="matrix(0.00487805 0 0 0.00396825 0 -0.0198413)" />
				</pattern>
				<image
					id="image0_235_11077"
					width="205"
					height="275"
					xlinkHref="data:image/png;base64,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"
				/>
			</defs>
		</svg>
	);
};

const IconHouse = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.5 17.0625H16.5M11.3046 3.21117L3.50457 8.48603C3.18802 8.7001 3 9.04666 3 9.41605V19.2882C3 20.2336 3.80589 21 4.8 21H19.2C20.1941 21 21 20.2336 21 19.2882V9.41605C21 9.04665 20.812 8.7001 20.4954 8.48603L12.6954 3.21117C12.2791 2.92961 11.7209 2.92961 11.3046 3.21117Z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconEyeClose = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M20.4 19.5L5.39999 4.5M10.2 10.4416C9.82658 10.8533 9.59999 11.394 9.59999 11.9863C9.59999 13.2761 10.6745 14.3217 12 14.3217C12.6111 14.3217 13.1689 14.0994 13.5926 13.7334M20.4388 14.3217C21.265 13.0848 21.6 12.0761 21.6 12.0761C21.6 12.0761 19.4154 5.1 12 5.1C11.5837 5.1 11.1839 5.12199 10.8 5.16349M17.4 17.3494C16.0226 18.2281 14.2493 18.8495 12 18.8127C4.67692 18.693 2.39999 12.0761 2.39999 12.0761C2.39999 12.0761 3.45785 8.69808 6.59999 6.64332"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
			/>
		</svg>
	);
};

const IconEyeOpen = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconFolder = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="25"
			height="24"
			viewBox="0 0 25 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M12.5837 19.941H5.30093C3.97543 19.941 2.90091 18.8665 2.90093 17.541L2.90102 8.41667C2.90102 7.50275 2.90068 6.20102 2.90039 5.25847C2.90019 4.59555 3.43752 4.05878 4.10044 4.05878H9.81865L12.5837 7.01241H20.9C21.5627 7.01241 22.1 7.54967 22.1 8.21241V11.4M20.3 18.6L21.5 19.8M20.9 16.2C20.9 17.8568 19.5568 19.2 17.9 19.2C16.2431 19.2 14.9 17.8568 14.9 16.2C14.9 14.5431 16.2431 13.2 17.9 13.2C19.5568 13.2 20.9 14.5431 20.9 16.2Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconJpg = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="40"
			height="46"
			viewBox="0 0 40 46"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
			fill="none"
		>
			<g filter="url(#filter0_dd_231_2297)">
				<mask
					id="mask0_231_2297"
					style={{ maskType: "luminance" }}
					maskUnits="userSpaceOnUse"
					x="5"
					y="14"
					width="30"
					height="23"
				>
					<path d="M34.3142 36.1768H5V14.1911H34.3142V36.1768Z" fill="white" />
				</mask>
				<g mask="url(#mask0_231_2297)">
					<path
						d="M8.66419 35.8105C6.8455 35.8105 5.36633 34.3311 5.36633 32.5127V4.66417C5.36633 2.84551 6.8455 1.36631 8.66419 1.36631H26.101L33.9477 9.213V32.5127C33.9477 34.3311 32.4683 35.8105 30.6499 35.8105H8.66419Z"
						fill="#F6F6F6"
					/>
					<path
						d="M26.2528 0.999665H8.66428C6.64034 0.999665 5 2.64031 5 4.66395V32.5125C5 34.5361 6.64034 36.1768 8.66428 36.1768H30.65C32.6739 36.1768 34.3142 34.5361 34.3142 32.5125V9.06108L26.2528 0.999665ZM25.9494 1.73252L33.5814 9.36456V32.5125C33.5814 34.1288 32.2669 35.4439 30.65 35.4439H8.66428C7.0477 35.4439 5.73286 34.1288 5.73286 32.5125V4.66395C5.73286 3.04763 7.0477 1.73252 8.66428 1.73252H25.9494Z"
						fill="#E0E0E0"
					/>
				</g>
				<mask
					id="mask1_231_2297"
					style={{ maskType: "luminance" }}
					maskUnits="userSpaceOnUse"
					x="5"
					y="1"
					width="30"
					height="14"
				>
					<path d="M34.3142 14.1909H5V0.999801H34.3142V14.1909Z" fill="white" />
				</mask>
				<g mask="url(#mask1_231_2297)">
					<path
						d="M8.66419 35.8105C6.8455 35.8105 5.36633 34.3311 5.36633 32.5127V4.66417C5.36633 2.84551 6.8455 1.36631 8.66419 1.36631H26.101L33.9477 9.213V32.5127C33.9477 34.3311 32.4683 35.8105 30.6499 35.8105H8.66419Z"
						fill="#74BD71"
					/>
					<path
						d="M26.2528 0.999665H8.66428C6.64034 0.999665 5 2.64031 5 4.66395V32.5125C5 34.5361 6.64034 36.1768 8.66428 36.1768H30.65C32.6739 36.1768 34.3142 34.5361 34.3142 32.5125V9.06108L26.2528 0.999665ZM25.9494 1.73252L33.5814 9.36456V32.5125C33.5814 34.1288 32.2669 35.4439 30.65 35.4439H8.66428C7.0477 35.4439 5.73286 34.1288 5.73286 32.5125V4.66395C5.73286 3.04763 7.0477 1.73252 8.66428 1.73252H25.9494Z"
						fill="#6AAD68"
					/>
				</g>
				<mask
					id="mask2_231_2297"
					style={{ maskType: "luminance" }}
					maskUnits="userSpaceOnUse"
					x="5"
					y="1"
					width="30"
					height="14"
				>
					<path d="M34.3142 14.1909H5V0.999801H34.3142V14.1909Z" fill="white" />
				</mask>
				<g mask="url(#mask2_231_2297)">
					<mask
						id="mask3_231_2297"
						style={{ maskType: "luminance" }}
						maskUnits="userSpaceOnUse"
						x="5"
						y="0"
						width="30"
						height="37"
					>
						<path
							d="M34.3142 32.5125C34.3142 34.5361 32.6739 36.1768 30.65 36.1768H8.66428C6.64034 36.1768 5 34.5361 5 32.5125V4.66395C5 2.64031 6.64034 0.999665 8.66428 0.999665H26.2528L34.3142 9.06108V32.5125Z"
							fill="white"
						/>
					</mask>
					<g mask="url(#mask3_231_2297)">
						<path d="M27.3046 7.9636L34.3979 15.0571V7.9636H27.3046Z" fill="#6AAD68" />
						<path
							d="M34.314 9.06104H29.9168C27.8929 9.06104 26.2526 7.42039 26.2526 5.39676V0.999619H34.314V9.06104Z"
							fill="#B9DEB8"
						/>
					</g>
				</g>
				<path
					d="M10.1487 5.56572H11.0505V8.56068C11.0505 8.94947 10.9431 9.26174 10.7284 9.49793C10.5137 9.73413 10.2331 9.85205 9.8853 9.85205C9.63342 9.85205 9.40865 9.77818 9.21057 9.62992C9.01133 9.48188 8.85903 9.25521 8.75168 8.95027L9.41437 8.44819V8.46109C9.41869 8.46307 9.44017 8.51026 9.47879 8.60246C9.51748 8.69494 9.56615 8.77798 9.62536 8.85236C9.68494 8.92594 9.74877 8.96317 9.81715 8.96317C9.91821 8.96317 9.99838 8.9214 10.0585 8.83778C10.1186 8.75394 10.1487 8.64225 10.1487 8.50286V5.56572Z"
					fill="white"
				/>
				<path
					d="M12.8189 6.32597V7.40804H13.1732C13.3258 7.40804 13.4561 7.35336 13.5646 7.24373C13.6728 7.13439 13.7272 7.00445 13.7272 6.85414C13.7272 6.68236 13.6656 6.54927 13.544 6.45481C13.4209 6.36034 13.2477 6.31307 13.0215 6.31307L12.8189 6.32597ZM11.9266 5.56593H13.3728C13.7616 5.56593 14.075 5.6793 14.3132 5.90546C14.5517 6.13213 14.6705 6.42989 14.6705 6.79947C14.6705 7.0419 14.6118 7.27238 14.4953 7.48997C14.3785 7.70807 14.2019 7.87069 13.9657 7.97805C13.7292 8.08541 13.5274 8.14118 13.3599 8.14551L12.8317 8.15841V9.79443H11.9266V5.56593Z"
					fill="white"
				/>
				<path
					d="M19.0025 6.48348L18.3973 7.05034C18.2704 6.83129 18.1139 6.66787 17.9269 6.55933C17.7403 6.45087 17.5447 6.39649 17.3409 6.39649C17.0103 6.39649 16.7231 6.52217 16.4798 6.77318C16.235 7.02455 16.1134 7.32084 16.1134 7.66206C16.1134 8.02504 16.235 8.33284 16.4798 8.58472C16.7231 8.83719 17.0166 8.96317 17.3601 8.96317C17.5467 8.96317 17.7265 8.91627 17.8997 8.82173C18.072 8.72697 18.2117 8.55006 18.3162 8.29019H17.3148V7.46572H19.2667V8.01332C19.2667 8.29444 19.1702 8.59674 18.977 8.91964C18.7834 9.24312 18.5295 9.47932 18.2132 9.62816C17.8983 9.77759 17.5791 9.85205 17.257 9.85205C16.673 9.85205 16.1807 9.64077 15.7784 9.21769C15.3777 8.79483 15.1764 8.27187 15.1764 7.64916C15.1764 7.05892 15.3834 6.5542 15.797 6.13566C16.2092 5.71684 16.7074 5.50761 17.2894 5.50761C18.0319 5.50761 18.6031 5.83307 19.0025 6.48348Z"
					fill="white"
				/>
				<path
					d="M28.4513 18.5883H10.8628V30.314H28.4513V18.5883ZM26.2527 20.7868V28.1154H13.0613V20.7868H26.2527Z"
					fill="#E0E0E0"
				/>
				<mask
					id="mask4_231_2297"
					style={{ maskType: "luminance" }}
					maskUnits="userSpaceOnUse"
					x="10"
					y="18"
					width="19"
					height="13"
				>
					<path d="M28.4513 30.314H10.8628V18.5883H28.4513V30.314Z" fill="white" />
				</mask>
				<g mask="url(#mask4_231_2297)">
					<path
						d="M29.9171 31.5376H9.39709V29.339H11.5957L14.5428 25.8024C14.7318 25.576 15.0037 25.4346 15.2981 25.4108C15.592 25.3868 15.884 25.4821 16.1068 25.6753L18.3302 27.6008C18.4833 27.7339 18.6858 27.7966 18.8879 27.7751C19.0903 27.7533 19.274 27.6489 19.396 27.486L22.3557 23.5394C22.5742 23.2489 22.9211 23.0845 23.2841 23.1009C23.6468 23.1169 23.9784 23.3107 24.1693 23.6193L27.7185 29.339H29.9171V31.5376Z"
						fill="#E0E0E0"
					/>
				</g>
				<path
					d="M15.9928 22.9855C15.9928 22.1765 16.649 21.5197 17.4585 21.5197C18.2681 21.5197 18.9243 22.1765 18.9243 22.9855C18.9243 23.7945 18.2681 24.4512 17.4585 24.4512C16.649 24.4512 15.9928 23.7945 15.9928 22.9855Z"
					fill="#E0E0E0"
				/>
			</g>
			<defs>
				<filter
					id="filter0_dd_231_2297"
					x="0"
					y="0"
					width="39.3142"
					height="45.1768"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_231_2297" />
					<feOffset dy="2" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
					/>
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_231_2297" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_231_2297" />
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="3" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
					/>
					<feBlend mode="normal" in2="effect1_dropShadow_231_2297" result="effect2_dropShadow_231_2297" />
					<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_231_2297" result="shape" />
				</filter>
			</defs>
		</svg>
	);
};
const IconLayer = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M17.3999 12.1744L21.5999 14.3272L11.9999 19.2479L2.3999 14.3272L6.67667 12.135M11.9999 4.75208L21.5999 9.67282L11.9999 14.5936L2.3999 9.67282L11.9999 4.75208Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconSearch = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<mask id="path-1-inside-1_146_469" fill="white">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M7.1125 6.10352e-05C3.18437 6.10352e-05 0 3.18443 0 7.11256C0 11.0407 3.18437 14.2251 7.1125 14.2251C8.77506 14.2251 10.3044 13.6546 11.5155 12.6988L14.5716 15.7549C14.8983 16.0817 15.4282 16.0817 15.7549 15.7549C16.0817 15.4282 16.0817 14.8983 15.7549 14.5716L12.6988 11.5154C13.6546 10.3044 14.225 8.77504 14.225 7.11256C14.225 3.18443 11.0406 6.10352e-05 7.1125 6.10352e-05ZM1.67353 7.11256C1.67353 4.1087 4.10864 1.67359 7.1125 1.67359C10.1164 1.67359 12.5515 4.1087 12.5515 7.11256C12.5515 10.1165 10.1164 12.5515 7.1125 12.5515C4.10864 12.5515 1.67353 10.1165 1.67353 7.11256Z"
				/>
			</mask>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.1125 6.10352e-05C3.18437 6.10352e-05 0 3.18443 0 7.11256C0 11.0407 3.18437 14.2251 7.1125 14.2251C8.77506 14.2251 10.3044 13.6546 11.5155 12.6988L14.5716 15.7549C14.8983 16.0817 15.4282 16.0817 15.7549 15.7549C16.0817 15.4282 16.0817 14.8983 15.7549 14.5716L12.6988 11.5154C13.6546 10.3044 14.225 8.77504 14.225 7.11256C14.225 3.18443 11.0406 6.10352e-05 7.1125 6.10352e-05ZM1.67353 7.11256C1.67353 4.1087 4.10864 1.67359 7.1125 1.67359C10.1164 1.67359 12.5515 4.1087 12.5515 7.11256C12.5515 10.1165 10.1164 12.5515 7.1125 12.5515C4.10864 12.5515 1.67353 10.1165 1.67353 7.11256Z"
				fill="currentColor"
			/>
			<path
				d="M11.5155 12.6988L15.8777 8.3366L11.9991 4.45802L7.69346 7.8563L11.5155 12.6988ZM15.7549 14.5716L11.3927 18.9338H11.3927L15.7549 14.5716ZM12.6988 11.5154L7.85616 7.69365L4.45821 11.9992L8.33662 15.8776L12.6988 11.5154ZM7.1125 -6.16902C-0.222714 -6.16902 -6.16908 -0.222653 -6.16908 7.11256H6.16908C6.16908 6.59152 6.59146 6.16914 7.1125 6.16914V-6.16902ZM-6.16908 7.11256C-6.16908 14.4477 -0.222724 20.3941 7.1125 20.3941V8.05598C6.59147 8.05598 6.16908 7.63359 6.16908 7.11256H-6.16908ZM7.1125 20.3941C10.2108 20.3941 13.0767 19.3256 15.3375 17.5413L7.69346 7.8563C7.53215 7.98362 7.33937 8.05598 7.1125 8.05598V20.3941ZM7.15327 17.061L10.2094 20.1171L18.9338 11.3927L15.8777 8.3366L7.15327 17.061ZM10.2094 20.1171C12.9453 22.853 17.3812 22.853 20.1171 20.1171L11.3927 11.3927C13.4752 9.3103 16.8514 9.3103 18.9338 11.3927L10.2094 20.1171ZM20.1171 20.1171C22.8531 17.3812 22.8531 12.9453 20.1171 10.2094L11.3927 18.9338C9.31032 16.8513 9.31032 13.4751 11.3927 11.3927L20.1171 20.1171ZM20.1171 10.2094L17.061 7.15325L8.33662 15.8776L11.3927 18.9338L20.1171 10.2094ZM17.5415 15.3372C19.3256 13.0766 20.3941 10.2108 20.3941 7.11256H8.05591C8.05591 7.33932 7.98357 7.5322 7.85616 7.69365L17.5415 15.3372ZM20.3941 7.11256C20.3941 -0.222663 14.4477 -6.16902 7.1125 -6.16902V6.16914C7.63352 6.16914 8.05591 6.59153 8.05591 7.11256H20.3941ZM7.84261 7.11256C7.84261 7.51579 7.51573 7.84267 7.1125 7.84267V-4.49549C0.70155 -4.49549 -4.49555 0.701612 -4.49555 7.11256H7.84261ZM7.1125 7.84267C6.70928 7.84267 6.38239 7.51576 6.38239 7.11256H18.7205C18.7205 0.701644 13.5235 -4.49549 7.1125 -4.49549V7.84267ZM6.38239 7.11256C6.38239 6.70937 6.70931 6.38245 7.1125 6.38245V18.7206C13.5235 18.7206 18.7205 13.5235 18.7205 7.11256H6.38239ZM7.1125 6.38245C7.51569 6.38245 7.84261 6.70934 7.84261 7.11256H-4.49555C-4.49555 13.5236 0.701583 18.7206 7.1125 18.7206V6.38245Z"
				fill="currentColor"
				mask="url(#path-1-inside-1_146_469)"
			/>
		</svg>
	);
};

const IconLoading = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("animate-spin", iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
				fill="currentColor"
			/>
		</svg>
	);
};

const IconLogoCanto = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			viewBox="0 0 42 36"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
			fill="none"
		>
			<g clipPath="url(#clip0_2_1301)">
				<path
					d="M40.8924 1.92695C40.1928 1.15059 39.2255 0.665336 38.183 0.567839C38.0528 0.555475 37.9278 0.549294 37.8011 0.549294C36.1613 0.549294 35.0666 1.0877 33.7998 1.71117C32.524 2.3683 31.1889 2.90445 29.8124 3.31255L29.2347 3.44707C26.8325 4.00932 24.9209 4.35962 22.8223 4.35962C20.7143 4.35962 18.4426 3.99696 15.678 3.22011C14.1581 2.62966 12.5438 2.31695 10.9126 2.29697C7.67657 2.29697 4.90694 3.10031 2.90377 4.61926C1.05892 6.01899 0.0012207 7.953 0.0012207 9.92439V23.456C0.0012207 25.2184 1.54332 28.271 4.93057 30.8064C7.76075 32.9259 12.9054 35.4513 21.3529 35.4513C29.7926 35.4513 34.7624 32.9197 37.4467 30.7955C40.5932 28.3049 42.0027 25.3141 42.0027 23.456V4.80677C42.0044 3.7427 41.6086 2.71611 40.8924 1.92695Z"
					fill="white"
				/>
				<path
					d="M21.5909 5.78496C21.5909 5.56977 21.8331 5.54505 21.9719 5.54446C24.1616 5.53779 26.3439 5.29019 28.4791 4.80618C34.1616 3.50212 34.9771 1.66172 37.8014 1.66172C37.895 1.66174 37.9886 1.66655 38.0817 1.67614C38.8586 1.75401 39.5783 2.1181 40.0999 2.6971C40.6215 3.27611 40.9075 4.02834 40.9018 4.80647C40.9018 6.30423 39.6926 7.51968 38.4869 7.87204C37.3383 8.20762 29.7229 10.227 21.9394 6.17559C21.8121 6.11112 21.5909 5.97836 21.5909 5.78496Z"
					fill="#FFA600"
				/>
				<path
					d="M39.2673 8.6483C36.5781 9.33625 33.8102 9.67055 31.034 9.64268C22.4472 9.64268 17.4767 3.4091 10.9117 3.4091C4.39592 3.4091 1.09729 6.83998 1.09729 9.9238V23.4554C1.09729 26.1595 6.30457 34.3377 21.3508 34.3377C36.3969 34.3377 40.9024 26.1783 40.9024 23.4554V10.1275C40.9018 8.85112 40.3702 8.3395 39.2673 8.6483Z"
					fill="#00852A"
				/>
				<path
					d="M9.39792 11.5434L9.40176 12.9246H9.22897C8.66344 12.6423 8.04109 12.4913 7.40863 12.4831C7.10042 12.4654 6.79232 12.5196 6.50882 12.6415C6.22533 12.7633 5.97426 12.9493 5.77556 13.1848C5.39136 13.7304 5.19582 14.3859 5.21851 15.052C5.19829 15.7295 5.40626 16.3942 5.80924 16.9401C6.01622 17.1656 6.2701 17.3432 6.55314 17.4607C6.83618 17.5783 7.14156 17.6327 7.44792 17.6204C8.0757 17.611 8.6932 17.4601 9.25407 17.1789H9.44931L9.45404 18.5489C8.81957 18.799 8.14544 18.9344 7.46328 18.9486C6.99638 18.9689 6.53005 18.8973 6.09092 18.738C5.65178 18.5786 5.24844 18.3346 4.90394 18.0199C4.50759 17.6271 4.19717 17.1568 3.99226 16.6386C3.78734 16.1203 3.69237 15.5654 3.71333 15.0088C3.6973 14.0161 4.03988 13.0507 4.67858 12.2888C5.02229 11.9131 5.44434 11.617 5.9151 11.4211C6.38585 11.2253 6.89391 11.1345 7.40361 11.1552C8.08595 11.1683 8.76078 11.2997 9.39792 11.5434Z"
					fill="background"
				/>
				<path
					d="M13.494 18.3107C13.2963 18.5149 13.0595 18.6774 12.7976 18.7886C12.5357 18.8999 12.254 18.9576 11.9694 18.9583C11.7146 18.9723 11.4596 18.9348 11.2196 18.8481C10.9797 18.7615 10.7599 18.6274 10.5732 18.454C10.3865 18.2806 10.2369 18.0714 10.1333 17.839C10.0297 17.6066 9.97427 17.3557 9.97032 17.1014C9.95955 16.6472 10.1214 16.2058 10.4235 15.8656C10.7256 15.5253 11.1456 15.3115 11.5993 15.2669L13.4601 14.9964C13.4146 14.4468 12.548 14.2519 12.169 14.2519C11.6498 14.2576 11.1376 14.3717 10.6653 14.5866H10.5135L10.5097 13.3353C11.0528 13.1642 11.6173 13.0697 12.1867 13.0544C13.4864 13.0544 14.7546 13.5401 14.8031 14.9652L14.8164 18.8294H13.4958L13.494 18.3107ZM12.2145 17.7496C12.6494 17.7315 13.0714 17.5971 13.4361 17.3605L13.4323 16.087C12.9668 16.1733 12.491 16.2169 12.0145 16.314C11.8338 16.3247 11.6642 16.4048 11.5415 16.5376C11.4189 16.6704 11.3526 16.8454 11.3568 17.0258C11.3577 17.5551 11.7591 17.749 12.2145 17.749V17.7496Z"
					fill="background"
				/>
				<path
					d="M20.5181 15.1586L20.5302 18.8285H19.155L19.1426 15.2984C19.1523 14.7594 18.8909 14.3167 18.284 14.3167C17.7816 14.3404 17.2953 14.501 16.878 14.7809L16.8913 18.8288H15.517L15.4969 13.1728H16.8293V13.5398C17.3366 13.2551 17.9022 13.089 18.4833 13.0541C19.676 13.0541 20.5131 13.896 20.5181 15.1586Z"
					fill="background"
				/>
				<path
					d="M22.8863 17.0258C22.8811 17.1232 22.8974 17.2207 22.9338 17.3113C22.9703 17.4018 23.0261 17.4834 23.0975 17.5503C23.1688 17.6171 23.2539 17.6677 23.3469 17.6984C23.4398 17.7291 23.5384 17.7393 23.6357 17.7281C23.9229 17.7123 24.2033 17.6349 24.4577 17.5012H24.6739L24.6786 18.699C24.2962 18.852 23.8896 18.9363 23.4777 18.9477C22.1355 18.9477 21.5147 18.1915 21.5099 16.8533L21.5014 14.3603H20.8841L20.8805 13.1731H21.497L21.4925 11.8455H22.8686L22.8731 13.1731H24.323L24.3283 14.3603H22.8769L22.8863 17.0258Z"
					fill="background"
				/>
				<path
					d="M27.6435 13.0541C29.2459 13.0541 30.3437 14.2087 30.3496 16.0008C30.3555 17.7929 29.278 18.9477 27.6639 18.9477C26.0497 18.9477 24.9409 17.7926 24.9353 16.0008C24.9297 14.209 26.0296 13.0541 27.6435 13.0541ZM27.6485 17.7279C28.4289 17.7279 28.9351 17.0579 28.931 16.0008C28.9268 14.9437 28.4064 14.2737 27.6364 14.2737C26.8664 14.2737 26.3507 14.9431 26.3542 16.0008C26.3578 17.0585 26.8797 17.7279 27.6485 17.7279Z"
					fill="background"
				/>
				<path
					d="M33.1311 21.3772C32.8306 21.3926 32.5315 21.328 32.2644 21.1901C31.9973 21.0522 31.7718 20.8459 31.6111 20.5924C31.4157 20.229 31.3175 19.8217 31.3258 19.4096C31.3106 18.9494 31.447 18.4968 31.7142 18.1211C31.874 17.9391 32.0718 17.794 32.2937 17.696C32.5157 17.5981 32.7564 17.5496 32.999 17.5539C33.2483 17.5428 33.4952 17.6063 33.7079 17.7364L33.7023 16.1668H34.5952L34.6088 20.4867C34.6102 20.6029 34.5884 20.7183 34.5448 20.8261C34.5011 20.934 34.4364 21.0321 34.3544 21.1148C34.2725 21.1975 34.1748 21.2632 34.0672 21.308C33.9596 21.3528 33.8441 21.376 33.7274 21.376L33.1311 21.3772ZM33.7103 18.4367C33.506 18.3816 33.2959 18.351 33.0844 18.3454C32.953 18.3396 32.8223 18.3674 32.7047 18.4262C32.5871 18.485 32.4866 18.5728 32.4127 18.6813C32.2929 18.9047 32.2375 19.1568 32.2529 19.4096C32.2218 19.7474 32.3129 20.0851 32.5096 20.3619C32.706 20.5244 32.958 20.6048 33.2126 20.5862H33.5079C33.5627 20.5864 33.6154 20.5652 33.6548 20.5272C33.6941 20.4892 33.717 20.4374 33.7185 20.3828L33.7103 18.4367Z"
					fill="background"
				/>
				<path
					d="M37.1599 20.6197C37.4975 20.6258 37.8312 20.5463 38.1295 20.3887H38.2412L38.2438 21.2217C37.8703 21.3326 37.4816 21.3847 37.0919 21.376C36.5601 21.3976 36.039 21.223 35.6284 20.8856C35.4392 20.7058 35.2908 20.4879 35.193 20.2463C35.0952 20.0048 35.0503 19.7452 35.0613 19.4849C35.0635 19.0207 35.204 18.5675 35.4651 18.1829C35.6183 17.9823 35.817 17.8206 36.0449 17.711C36.2728 17.6015 36.5235 17.5473 36.7765 17.5527C37.0866 17.5359 37.3942 17.6159 37.6565 17.7817C37.9188 17.9474 38.1227 18.1906 38.2397 18.4773C38.3987 18.904 38.4625 19.36 38.4267 19.8138H36.018C36.1122 20.3954 36.6483 20.6339 37.1599 20.6197ZM36.0239 19.0796H37.5202C37.4765 18.6174 37.244 18.3298 36.7936 18.3234C36.6932 18.3226 36.5937 18.3415 36.5007 18.3791C36.4076 18.4167 36.3229 18.4722 36.2515 18.5425C36.18 18.6127 36.1231 18.6963 36.084 18.7885C36.045 18.8806 36.0245 18.9796 36.0239 19.0796Z"
					fill="background"
				/>
				<path
					d="M12.6714 28.3767L11.0174 23.3898L10.7637 28.3767H9.45285L9.77775 21.706C9.77995 21.4535 9.87982 21.2115 10.0565 21.0306C10.2333 20.8496 10.4732 20.7436 10.7265 20.7345C10.9652 20.7341 11.1979 20.8091 11.3911 20.9488C11.5843 21.0885 11.728 21.2857 11.8016 21.512L13.4214 26.3479L14.9534 21.512C15.0182 21.2745 15.1655 21.0676 15.3689 20.9282C15.5724 20.7888 15.8189 20.7258 16.0646 20.7506C16.3103 20.7753 16.5392 20.8861 16.7106 21.0633C16.882 21.2404 16.9848 21.4724 17.0006 21.718L17.3707 28.3776H15.9414L15.7072 23.2941L14.0995 28.3767H12.6714Z"
					fill="background"
				/>
				<path
					d="M19.3582 28.3764H17.9839L17.9638 22.7207H19.3384L19.3582 28.3764ZM19.3488 22.1699H17.9605L17.9561 20.8208H19.3428L19.3488 22.1699Z"
					fill="background"
				/>
				<path
					d="M25.1045 24.7071L25.1169 28.377H23.7423L23.7299 24.8478C23.7394 24.3082 23.4777 23.8655 22.8719 23.8655C22.3693 23.8891 21.8828 24.0493 21.465 24.3288L21.4798 28.377H20.1034L20.0848 22.7213H21.4163L21.4181 23.088C21.9253 22.8032 22.491 22.6372 23.0721 22.6026C24.2633 22.6023 25.1007 23.4433 25.1045 24.7071Z"
					fill="background"
				/>
				<path
					d="M29.2878 27.8586C29.0902 28.0628 28.8533 28.2254 28.5914 28.3367C28.3295 28.4479 28.0478 28.5056 27.7631 28.5062C27.5083 28.5202 27.2534 28.4828 27.0135 28.3962C26.7735 28.3096 26.5537 28.1756 26.367 28.0022C26.1803 27.8289 26.0306 27.6198 25.927 27.3874C25.8233 27.155 25.7678 26.9042 25.7638 26.6499C25.7535 26.1957 25.9157 25.7544 26.2179 25.4143C26.5201 25.0741 26.94 24.8602 27.3936 24.8154L29.2544 24.5461C29.2101 23.9956 28.3423 23.8013 27.9625 23.8013C27.4437 23.8069 26.9319 23.9207 26.46 24.1354H26.3079L26.3031 22.8843C26.8462 22.7128 27.4107 22.6182 27.9802 22.6032C29.2798 22.6032 30.5499 23.0886 30.5971 24.5134L30.611 28.3776H29.2902L29.2878 27.8586ZM28.0077 27.2969C28.4427 27.2786 28.8649 27.1447 29.2305 26.909L29.2267 25.6349C28.7603 25.7212 28.2841 25.7645 27.8089 25.8613C27.6281 25.8727 27.4587 25.9532 27.3361 26.0861C27.2135 26.2191 27.1473 26.3941 27.1511 26.5746C27.152 27.1032 27.5528 27.2969 28.0077 27.2969Z"
					fill="background"
				/>
				<path
					d="M31.3672 28.2139L31.3648 27.0055H31.5376C32.0474 27.1962 32.5863 27.2986 33.1308 27.3081C33.5201 27.2969 34.1699 27.2325 34.1678 26.7044C34.1678 26.4127 33.7439 26.2719 33.4837 26.1745C33.0148 26.0199 32.5547 25.8398 32.1056 25.6349C31.8551 25.4946 31.6478 25.2889 31.5059 25.04C31.364 24.791 31.2928 24.5082 31.3001 24.2219C31.2971 23.1419 32.3023 22.592 33.2433 22.6029C33.8369 22.6152 34.4252 22.7168 34.9883 22.9044L34.9922 24.06H34.8079C34.3629 23.897 33.8937 23.8093 33.4196 23.8007C33.2031 23.8007 32.597 23.844 32.5985 24.1675C32.5985 24.3403 32.9134 24.5128 33.1511 24.5881C33.6464 24.743 34.1321 24.9269 34.6055 25.1389C34.8789 25.2798 35.1055 25.4965 35.2581 25.7629C35.4107 26.0293 35.4826 26.334 35.4653 26.6402C35.4692 27.9354 34.2694 28.4947 33.0785 28.4947C32.497 28.489 31.9198 28.3943 31.3672 28.2139Z"
					fill="background"
				/>
			</g>
			<defs>
				<clipPath id="clip0_2_1301">
					<rect width="42" height="34.9014" fill="white" transform="translate(0 0.549294)" />
				</clipPath>
			</defs>
		</svg>
	);
};

const IconLogout = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M13.4265 7.15V5.225C13.4265 4.71446 13.222 4.22483 12.8579 3.86382C12.4939 3.50281 12.0001 3.3 11.4853 3.3H4.69118C4.17634 3.3 3.6826 3.50281 3.31856 3.86382C2.95452 4.22483 2.75 4.71446 2.75 5.225V16.775C2.75 17.2855 2.95452 17.7752 3.31856 18.1362C3.6826 18.4972 4.17634 18.7 4.69118 18.7H11.4853C12.0001 18.7 12.4939 18.4972 12.8579 18.1362C13.222 17.7752 13.4265 17.2855 13.4265 16.775V14.85M7.60294 11H19.25M19.25 11L16.3382 8.1125M19.25 11L16.3382 13.8875"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconHandBye = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="32"
			height="33"
			viewBox="0 0 32 33"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
			fill="none"
		>
			<path
				d="M15.2586 29.958C14.1153 29.0405 3.49888 18.7164 3.38022 18.6035C2.91133 18.1346 2.61611 17.6483 2.53507 17.2026C2.45113 16.7395 2.59296 16.3343 2.96922 15.958C3.31944 15.6078 3.7478 15.4226 4.208 15.4226C4.7695 15.4226 5.34547 15.6889 5.82593 16.1722L10.6392 20.7974C10.7232 20.8784 10.8331 20.9189 10.9402 20.9189C11.0531 20.9189 11.1631 20.8755 11.247 20.7916C11.4149 20.6237 11.4149 20.3517 11.2499 20.1838L3.56545 12.2475C2.79556 11.4776 2.43377 10.2996 3.34838 9.385C3.69859 9.03478 4.12696 8.84954 4.58716 8.84954C5.14866 8.84954 5.72463 9.11582 6.20509 9.59918L14.0661 17.2634C14.1501 17.3444 14.26 17.3878 14.37 17.3878C14.48 17.3878 14.5929 17.3444 14.6768 17.2605C14.8447 17.0926 14.8476 16.8206 14.6797 16.6498L5.23838 6.97112C4.80134 6.53407 4.53795 6.01019 4.49164 5.50079C4.44823 4.9827 4.63057 4.50224 5.02131 4.11151C5.37152 3.76129 5.79989 3.57605 6.26009 3.57605C6.82159 3.57605 7.39756 3.84233 7.87802 4.32279L17.5075 13.712C17.5914 13.7931 17.7014 13.8365 17.8114 13.8365C17.9214 13.8365 18.0343 13.7931 18.1182 13.7091C18.2861 13.5413 18.289 13.2692 18.1211 13.0984L11.1284 5.91179C10.6884 5.47185 10.425 4.95086 10.3816 4.44146C10.3382 3.92337 10.5206 3.44291 10.9113 3.05218C11.2615 2.70196 11.6899 2.51672 12.1501 2.51672C12.7116 2.51672 13.2875 2.783 13.768 3.26636C16.3324 5.78444 23.027 12.3691 23.2528 12.6122C24.1124 13.2055 24.286 12.3083 24.3295 11.7265C24.3787 11.0492 23.603 8.68457 24.0545 6.55722C24.8128 3.72945 26.998 4.19255 27.0472 4.2157C28.2455 4.7772 28.0168 5.61656 27.5914 7.30396L27.548 7.63681C27.1022 9.8423 30.1644 16.3777 30.3902 16.8669C31.5914 19.4949 32.9749 24.8234 28.3931 29.4052C23.3714 34.4268 17.1544 31.8538 15.2586 29.958Z"
				fill="url(#paint0_radial_22_900)"
			/>
			<path
				d="M21.7017 32.7771C18.6221 32.7771 16.0027 31.3039 14.9695 30.2822C14.0404 29.5239 8.17645 23.8626 3.40079 19.2287C3.20687 19.0406 3.09399 18.9335 3.08241 18.919C2.54117 18.3778 2.20543 17.8134 2.10991 17.2808C1.99993 16.6759 2.18806 16.1289 2.66273 15.6513C3.09688 15.2172 3.62944 14.9885 4.20831 14.9885C4.88848 14.9885 5.57154 15.3011 6.13305 15.8655L10.9405 20.4849L3.25318 12.5486C2.36751 11.6629 1.92178 10.1955 3.04189 9.07826C3.47604 8.64411 4.0086 8.41546 4.58747 8.41546C5.26764 8.41546 5.9507 8.72805 6.51221 9.29245L14.3674 16.9509L4.929 7.27509C4.42539 6.77147 4.11569 6.15498 4.0607 5.54138C4.00571 4.88726 4.23146 4.28813 4.71482 3.80477C5.14897 3.37062 5.68153 3.14197 6.2604 3.14197C6.93767 3.14197 7.62074 3.45166 8.18513 4.01606L17.8117 13.4024L10.819 6.21576C10.3125 5.70925 10.0028 5.09276 9.95068 4.47916C9.89569 3.82793 10.1214 3.2288 10.6048 2.74545C11.039 2.31129 11.5715 2.08264 12.1504 2.08264C12.8306 2.08264 13.5136 2.39523 14.0751 2.95963L16.1619 5.00593C19.8812 8.6528 22.9897 11.7063 23.3225 12.0479C23.4846 12.1781 23.6959 12.2273 23.7856 12.1839C23.8435 12.1549 23.9072 12.0218 23.8956 11.7411C23.8783 11.249 23.8088 10.6383 23.7364 9.99288C23.5917 8.69621 23.4412 7.35324 23.6293 6.46757C24.0403 4.93067 24.8479 4.27945 25.4499 3.9987C26.2777 3.61664 27.0794 3.74978 27.2328 3.82214C28.7379 4.52836 28.4397 5.70925 28.0287 7.34745L28.0201 7.38797L27.9737 7.72661C27.6727 9.20851 29.2183 13.304 30.7639 16.6412L30.787 16.6875C31.8203 18.9451 33.6814 24.7367 28.7031 29.7149C26.4137 31.9986 23.9361 32.7771 21.7017 32.7771ZM4.20831 15.8568C3.86678 15.8568 3.54261 15.9986 3.27633 16.2649C3.00137 16.5399 2.90586 16.8062 2.96374 17.1245C3.02742 17.4747 3.28501 17.8915 3.68733 18.2967C3.69022 18.2996 3.806 18.4125 4.00571 18.6035C10.7843 25.1824 14.8769 29.0926 15.531 29.6194L15.5657 29.6512C17.1634 31.2489 23.0997 34.0854 28.0866 29.0984C32.6799 24.5051 30.952 19.1419 29.994 17.0464L29.9737 17.003C28.9781 14.8554 26.7147 9.64556 27.117 7.56742L27.1836 7.13327C27.6293 5.36193 27.6554 4.99145 26.8999 4.62677C26.6771 4.58625 25.0794 4.39233 24.4687 6.67017C24.3153 7.39665 24.4629 8.72515 24.5932 9.89736C24.6684 10.5602 24.7379 11.1882 24.7552 11.7121C24.7842 12.537 24.3934 12.8525 24.1561 12.9683C23.6728 13.2027 23.0968 13.003 22.7379 12.702L22.7003 12.6672C22.5237 12.4762 18.324 8.35757 15.5454 5.6311L13.4557 3.57902C12.7437 2.86411 11.8262 2.74545 11.2097 3.36194C10.9087 3.66295 10.7727 4.01606 10.8045 4.4068C10.8392 4.8149 11.0592 5.24037 11.4268 5.60795L18.434 12.7946C18.764 13.1303 18.764 13.6803 18.4282 14.016C18.1069 14.3373 17.5396 14.3431 17.2097 14.0247L7.57443 4.63256C6.86242 3.92055 5.94202 3.80188 5.32842 4.41838C5.02741 4.71939 4.89137 5.0725 4.92321 5.46323C4.96084 5.87133 5.18081 6.2997 5.5455 6.66149L14.9897 16.346C15.3226 16.6817 15.3197 17.2316 14.9839 17.5674C14.6627 17.8886 14.0954 17.8944 13.7654 17.5761L5.9015 9.90894C5.18949 9.19114 4.26909 9.07537 3.65549 9.69186C2.90586 10.4415 3.30528 11.3706 3.87257 11.9408L11.5628 19.8828C11.8928 20.2186 11.8899 20.7656 11.5541 21.0985C11.23 21.4226 10.6685 21.4255 10.3385 21.11L5.52523 16.4849C5.12003 16.0768 4.65404 15.8568 4.20831 15.8568Z"
				fill="#EDBD82"
			/>
			<path
				d="M22.5609 12.3314C20.9719 15.576 21.1774 20.1172 23.5623 23.7612C23.8315 24.2532 24.2917 24.013 24.0573 23.5065C21.1774 17.3444 24.1962 12.9045 24.1962 12.9045L22.5609 12.3314Z"
				fill="#EDBD82"
			/>
			<path
				d="M16.3121 0.163644C17.1862 -0.0650086 18.1181 -0.0447481 19.0241 0.166539C19.9242 0.383614 20.8244 0.84092 21.4929 1.58766C22.1471 2.32861 22.5494 3.22875 22.6854 4.17231C22.8128 5.10718 22.6941 6.07099 22.2513 6.86983C22.1992 5.97259 22.0429 5.1477 21.7795 4.38649C21.6434 4.00733 21.4843 3.64554 21.2903 3.304C21.0993 2.96537 20.8736 2.62962 20.6333 2.35466C20.1442 1.79026 19.4814 1.35032 18.7375 1.00879C17.9908 0.655682 17.1775 0.395192 16.3121 0.163644Z"
				fill="#B0BEC5"
			/>
			<path
				d="M16.5525 2.90753C17.0358 2.60073 17.6408 2.53705 18.2109 2.63836C18.7869 2.73966 19.3368 3.0262 19.771 3.42272C20.2023 3.82504 20.5091 4.33155 20.7001 4.85832C20.7927 5.1217 20.839 5.39956 20.8824 5.66873C20.8969 5.94659 20.8969 6.22445 20.8535 6.5023C20.6538 6.29102 20.4975 6.07973 20.3499 5.87423C20.1791 5.68031 20.046 5.47481 19.8926 5.28668C19.5915 4.91331 19.2992 4.57467 18.9837 4.27366C18.6596 3.98133 18.318 3.72373 17.9215 3.50087C17.5279 3.27222 17.085 3.08119 16.5525 2.90753Z"
				fill="#90A4AE"
			/>
			<path
				d="M0.00553195 21.2461C0.413634 22.0449 0.839102 22.7859 1.33403 23.44C1.82607 24.0941 2.39047 24.6498 3.04748 25.0116C3.36586 25.1882 3.74502 25.3416 4.1155 25.4574C4.48887 25.576 4.87671 25.6571 5.27613 25.7121C6.07497 25.8105 6.91433 25.7931 7.80289 25.6571C7.11403 26.2562 6.19363 26.5746 5.25587 26.644C4.30652 26.7077 3.34271 26.5022 2.48019 26.016C1.61189 25.521 0.975136 24.7338 0.575717 23.8973C0.176298 23.0551 -0.0378832 22.1491 0.00553195 21.2461Z"
				fill="#B0BEC5"
			/>
			<path
				d="M2.74045 20.9075C3.0212 21.3937 3.29906 21.7845 3.60296 22.126C3.90397 22.4675 4.22814 22.7483 4.58125 23.003C4.94015 23.249 5.33378 23.4661 5.76214 23.6831C5.97632 23.7931 6.20497 23.88 6.43073 24.0073C6.66517 24.1086 6.90251 24.2157 7.15142 24.3691C6.88804 24.4675 6.61887 24.5254 6.3439 24.5688C6.07183 24.5804 5.79108 24.5949 5.51323 24.5572C4.95751 24.482 4.4018 24.2881 3.91555 23.9494C3.43798 23.605 3.04146 23.1274 2.82438 22.5862C2.60441 22.0478 2.54074 21.4458 2.74045 20.9075Z"
				fill="#90A4AE"
			/>
			<defs>
				<radialGradient
					id="paint0_radial_22_900"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(10.7771 9.85963) rotate(-45) scale(26.3407)"
				>
					<stop offset="0.3533" stopColor="#F9DDBD" />
					<stop offset="0.8723" stopColor="#FFD29C" />
				</radialGradient>
			</defs>
		</svg>
	);
};

const IconMenuHamburguer = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M10.5 18H20M4 12H20M4 6H20"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
			/>
		</svg>
	);
};

const IconMessage = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M7.89893 8.40002H15.0989M7.89893 13.2H12.0989M21.0989 12C21.0989 13.3801 20.8077 14.6921 20.2834 15.878L21.1007 21.5991L16.1978 20.3734C14.8089 21.1545 13.2059 21.6 11.4989 21.6C6.19699 21.6 1.89893 17.302 1.89893 12C1.89893 6.69809 6.19699 2.40002 11.4989 2.40002C16.8009 2.40002 21.0989 6.69809 21.0989 12Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconMicrosoft = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="133"
			height="134"
			viewBox="0 0 133 134"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
			fill="none"
		>
			<rect x="0.827148" y="0.65625" width="63.2128" height="63.4596" fill="#F15021" />
			<rect x="69.7871" y="0.65625" width="63.2128" height="63.4596" fill="#7EB900" />
			<rect x="0.827148" y="69.8838" width="63.2128" height="63.4596" fill="#00A3EE" />
			<rect x="69.7871" y="69.8838" width="63.2128" height="63.4596" fill="#FFB800" />
		</svg>
	);
};

const IconNotification = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="45"
			height="44"
			viewBox="0 0 45 44"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M12.0999 11.4H30.2999M12.0999 21.8H22.4999M21.8217 31.7478L10.9695 42.6V31.7478H6.89995C4.02807 31.7478 1.69995 29.4197 1.69995 26.5478V6.2C1.69995 3.32812 4.02807 1 6.89995 1H38.0999C40.9718 1 43.2999 3.32812 43.2999 6.2V26.5478C43.2999 29.4197 40.9718 31.7478 38.0999 31.7478H21.8217Z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconPdf = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="40"
			height="46"
			viewBox="0 0 40 46"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
			fill="none"
		>
			<g filter="url(#filter0_dd_231_2265)">
				<mask
					id="mask0_231_2265"
					style={{ maskType: "luminance" }}
					maskUnits="userSpaceOnUse"
					x="5"
					y="14"
					width="30"
					height="23"
				>
					<path d="M5 36.1768H34.3142V14.1911H5V36.1768Z" fill="white" />
				</mask>
				<g mask="url(#mask0_231_2265)">
					<path
						d="M8.66419 35.8105C6.8455 35.8105 5.36633 34.3311 5.36633 32.5127V4.66417C5.36633 2.84573 6.8455 1.36631 8.66419 1.36631H26.101L33.9477 9.213V32.5127C33.9477 34.3311 32.4683 35.8105 30.6499 35.8105H8.66419Z"
						fill="#F6F6F6"
					/>
					<path
						d="M26.2528 0.999665H8.66428C6.64034 0.999665 5 2.64031 5 4.66395V32.5125C5 34.5361 6.64034 36.1768 8.66428 36.1768H30.65C32.6739 36.1768 34.3142 34.5361 34.3142 32.5125V9.06108L26.2528 0.999665ZM25.9494 1.73252L33.5814 9.36456V32.5125C33.5814 34.1288 32.2669 35.4439 30.65 35.4439H8.66428C7.0477 35.4439 5.73286 34.1288 5.73286 32.5125V4.66395C5.73286 3.04763 7.0477 1.73252 8.66428 1.73252H25.9494Z"
						fill="#E0E0E0"
					/>
				</g>
				<path
					d="M28.2681 25.1841H18.3746C17.7677 25.1841 17.2753 24.692 17.2753 24.0848C17.2753 23.4776 17.7677 22.9855 18.3746 22.9855H28.2681C28.875 22.9855 29.3674 23.4776 29.3674 24.0848C29.3674 24.692 28.875 25.1841 28.2681 25.1841Z"
					fill="#D8D8D8"
				/>
				<path
					d="M28.2681 29.5811H18.3746C17.7677 29.5811 17.2753 29.089 17.2753 28.4818C17.2753 27.8746 17.7677 27.3825 18.3746 27.3825H28.2681C28.875 27.3825 29.3674 27.8746 29.3674 28.4818C29.3674 29.089 28.875 29.5811 28.2681 29.5811Z"
					fill="#D8D8D8"
				/>
				<path
					d="M28.6346 20.7866H10.6796C10.0727 20.7866 9.58032 20.2945 9.58032 19.6873C9.58032 19.0802 10.0727 18.5881 10.6796 18.5881H28.6346C29.2415 18.5881 29.7339 19.0802 29.7339 19.6873C29.7339 20.2945 29.2415 20.7866 28.6346 20.7866Z"
					fill="#D8D8D8"
				/>
				<mask
					id="mask1_231_2265"
					style={{ maskType: "luminance" }}
					maskUnits="userSpaceOnUse"
					x="5"
					y="1"
					width="30"
					height="14"
				>
					<path d="M5 14.1909H34.3142V0.999801H5V14.1909Z" fill="white" />
				</mask>
				<g mask="url(#mask1_231_2265)">
					<path
						d="M8.66419 35.8105C6.8455 35.8105 5.36633 34.3311 5.36633 32.5127V4.66417C5.36633 2.84551 6.8455 1.36631 8.66419 1.36631H26.101L33.9477 9.213V32.5127C33.9477 34.3311 32.4683 35.8105 30.6499 35.8105H8.66419Z"
						fill="#D84953"
					/>
					<path
						d="M26.2528 0.999665H8.66428C6.64034 0.999665 5 2.64031 5 4.66395V32.5125C5 34.5361 6.64034 36.1768 8.66428 36.1768H30.65C32.6739 36.1768 34.3142 34.5361 34.3142 32.5125V9.06108L26.2528 0.999665ZM25.9494 1.73252L33.5814 9.36456V32.5125C33.5814 34.1288 32.2669 35.4439 30.65 35.4439H8.66428C7.0477 35.4439 5.73286 34.1288 5.73286 32.5125V4.66395C5.73286 3.04763 7.0477 1.73252 8.66428 1.73252H25.9494Z"
						fill="#C4434C"
					/>
				</g>
				<mask
					id="mask2_231_2265"
					style={{ maskType: "luminance" }}
					maskUnits="userSpaceOnUse"
					x="5"
					y="1"
					width="30"
					height="14"
				>
					<path d="M5 14.1909H34.3142V0.999801H5V14.1909Z" fill="white" />
				</mask>
				<g mask="url(#mask2_231_2265)">
					<mask
						id="mask3_231_2265"
						style={{ maskType: "luminance" }}
						maskUnits="userSpaceOnUse"
						x="5"
						y="0"
						width="30"
						height="37"
					>
						<path
							d="M34.3142 32.5125C34.3142 34.5361 32.6739 36.1768 30.65 36.1768H8.66428C6.64034 36.1768 5 34.5361 5 32.5125V4.66395C5 2.64031 6.64034 0.999665 8.66428 0.999665H26.2528L34.3142 9.06108V32.5125Z"
							fill="white"
						/>
					</mask>
					<g mask="url(#mask3_231_2265)">
						<path d="M27.3046 7.9636L34.3979 15.0571V7.9636H27.3046Z" fill="#C4434C" />
						<path
							d="M34.314 9.06104H29.9168C27.8929 9.06104 26.2526 7.42039 26.2526 5.39676V0.999619H34.314V9.06104Z"
							fill="#ECA4A9"
						/>
					</g>
				</g>
				<path
					d="M10.0041 6.32548V7.40755H10.3582C10.5108 7.40755 10.6411 7.35288 10.7499 7.24324C10.8581 7.1339 10.9125 7.00396 10.9125 6.85365C10.9125 6.68187 10.8515 6.54878 10.7284 6.45432C10.6067 6.35985 10.4321 6.31259 10.2074 6.31259L10.0041 6.32548ZM9.1124 5.56544H10.5581C10.9469 5.56544 11.2603 5.67881 11.4985 5.90497C11.737 6.13164 11.8563 6.4294 11.8563 6.79898C11.8563 7.04141 11.7976 7.27189 11.6802 7.48948C11.5629 7.70758 11.3868 7.8702 11.1507 7.97756C10.9145 8.08492 10.7126 8.1407 10.5452 8.14502L10.017 8.15792V9.79395H9.1124V5.56544Z"
					fill="white"
				/>
				<path
					d="M13.4923 6.36411V8.97608H13.853C14.2265 8.97608 14.5328 8.87384 14.7733 8.67004C15.0138 8.46594 15.134 8.12553 15.134 7.64888C15.134 7.37208 15.0768 7.12701 14.9608 6.91345C14.8449 6.69961 14.676 6.55479 14.457 6.47836C14.2366 6.40221 14.0262 6.36411 13.8272 6.36411H13.4923ZM12.5742 5.56544H14.0167C14.633 5.56544 15.1292 5.75979 15.5048 6.14828C15.8806 6.53677 16.0687 7.04889 16.0687 7.68442C16.0687 8.32222 15.874 8.83324 15.4875 9.21741C15.0997 9.60186 14.5836 9.79395 13.9394 9.79395H12.5742V5.56544Z"
					fill="white"
				/>
				<path
					d="M16.7864 5.56544H19.1662V6.38331H17.692V7.24639H19.1662V8.07085H17.6977V9.79395H16.7864V5.56544Z"
					fill="white"
				/>
				<path
					d="M15.26 28.4818C15.26 29.089 14.7676 29.5811 14.1607 29.5811H10.4964C9.88953 29.5811 9.39713 29.089 9.39713 28.4818V24.0846C9.39713 23.4775 9.88953 22.9853 10.4964 22.9853H14.1607C14.7676 22.9853 15.26 23.4775 15.26 24.0846V28.4818Z"
					fill="#E0E0E0"
				/>
			</g>
			<defs>
				<filter
					id="filter0_dd_231_2265"
					x="0"
					y="0"
					width="39.3142"
					height="45.1768"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_231_2265" />
					<feOffset dy="2" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
					/>
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_231_2265" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_231_2265" />
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="3" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
					/>
					<feBlend mode="normal" in2="effect1_dropShadow_231_2265" result="effect2_dropShadow_231_2265" />
					<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_231_2265" result="shape" />
				</filter>
			</defs>
		</svg>
	);
};

const IconPencil = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<g id="pencil-01">
				<path
					id="Icon"
					d="M3.5998 11.7L6.7498 14.4M3.1498 11.7L12.0233 2.51656C12.9788 1.56113 14.5278 1.56113 15.4832 2.51656C16.4387 3.47198 16.4387 5.02103 15.4832 5.97646L6.2998 14.85L1.7998 16.2L3.1498 11.7Z"
					stroke="currentColor"
					strokeWidth={strokeWidth}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

const IconPng = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="45"
			height="51"
			viewBox="0 0 45 51"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
			fill="none"
		>
			<g filter="url(#filter0_dd_231_2332)">
				<mask
					id="mask0_231_2332"
					style={{ maskType: "luminance" }}
					maskUnits="userSpaceOnUse"
					x="5"
					y="16"
					width="35"
					height="26"
				>
					<path d="M39.0777 41.8931H5V16.3348H39.0777V41.8931Z" fill="white" />
				</mask>
				<g mask="url(#mask0_231_2332)">
					<path
						d="M9.25961 41.4673C7.1454 41.4673 5.42587 39.7474 5.42587 37.6335V5.25974C5.42587 3.14556 7.1454 1.426 9.25961 1.426H29.5299L38.6516 10.5477V37.6335C38.6516 39.7474 36.9318 41.4673 34.8179 41.4673H9.25961Z"
						fill="#F6F6F6"
					/>
					<path
						d="M29.7063 0.999836H9.25971C6.90689 0.999836 5 2.90708 5 5.25955V37.6334C5 39.9858 6.90689 41.8931 9.25971 41.8931H34.818C37.1708 41.8931 39.0777 39.9858 39.0777 37.6334V10.3712L29.7063 0.999836ZM29.3535 1.85178L38.2257 10.724V37.6334C38.2257 39.5123 36.6976 41.0411 34.818 41.0411H9.25971C7.38045 41.0411 5.85194 39.5123 5.85194 37.6334V5.25955C5.85194 3.38059 7.38045 1.85178 9.25971 1.85178H29.3535Z"
						fill="#E0E0E0"
					/>
				</g>
				<mask
					id="mask1_231_2332"
					style={{ maskType: "luminance" }}
					maskUnits="userSpaceOnUse"
					x="5"
					y="1"
					width="35"
					height="16"
				>
					<path d="M39.0777 16.335H5V1.00034H39.0777V16.335Z" fill="white" />
				</mask>
				<g mask="url(#mask1_231_2332)">
					<path
						d="M9.25961 41.4673C7.1454 41.4673 5.42587 39.7474 5.42587 37.6335V5.25974C5.42587 3.14556 7.1454 1.426 9.25961 1.426H29.5299L38.6516 10.5477V37.6335C38.6516 39.7474 36.9318 41.4673 34.8179 41.4673H9.25961Z"
						fill="#7BB2D1"
					/>
					<path
						d="M29.7063 0.999836H9.25971C6.90689 0.999836 5 2.90708 5 5.25955V37.6334C5 39.9858 6.90689 41.8931 9.25971 41.8931H34.818C37.1708 41.8931 39.0777 39.9858 39.0777 37.6334V10.3712L29.7063 0.999836ZM29.3535 1.85178L38.2257 10.724V37.6334C38.2257 39.5123 36.6976 41.0411 34.818 41.0411H9.25971C7.38045 41.0411 5.85194 39.5123 5.85194 37.6334V5.25955C5.85194 3.38059 7.38045 1.85178 9.25971 1.85178H29.3535Z"
						fill="#679FB7"
					/>
				</g>
				<mask
					id="mask2_231_2332"
					style={{ maskType: "luminance" }}
					maskUnits="userSpaceOnUse"
					x="5"
					y="1"
					width="35"
					height="16"
				>
					<path d="M39.0777 16.335H5V1.00034H39.0777V16.335Z" fill="white" />
				</mask>
				<g mask="url(#mask2_231_2332)">
					<mask
						id="mask3_231_2332"
						style={{ maskType: "luminance" }}
						maskUnits="userSpaceOnUse"
						x="5"
						y="1"
						width="35"
						height="41"
					>
						<path
							d="M39.0777 37.6334C39.0777 39.9858 37.1708 41.8931 34.818 41.8931H9.25971C6.90689 41.8931 5 39.9858 5 37.6334V5.25955C5 2.90708 6.90689 0.999836 9.25971 0.999836H29.7063L39.0777 10.3712V37.6334Z"
							fill="white"
						/>
					</mask>
					<g mask="url(#mask3_231_2332)">
						<path d="M30.9294 9.09559L39.1754 17.3418V9.09559H30.9294Z" fill="#679FB7" />
						<path
							d="M39.0778 10.3711H33.9661C31.6133 10.3711 29.7064 8.46385 29.7064 6.11138V0.999729H39.0778V10.3711Z"
							fill="#BDD9E8"
						/>
					</g>
				</g>
				<path
					d="M10.8173 7.19107V8.44897H11.2289C11.4063 8.44897 11.5578 8.38541 11.6842 8.25796C11.81 8.13085 11.8732 7.9798 11.8732 7.80507C11.8732 7.60537 11.8024 7.45066 11.6592 7.34084C11.5178 7.23103 11.3148 7.17608 11.0536 7.17608L10.8173 7.19107ZM9.78064 6.30752H11.4612C11.9132 6.30752 12.2776 6.43932 12.5545 6.70223C12.8317 6.96573 12.9705 7.31188 12.9705 7.74151C12.9705 8.02333 12.9022 8.29127 12.7657 8.54421C12.6293 8.79775 12.4246 8.9868 12.1501 9.11161C11.8755 9.23641 11.6409 9.30125 11.4462 9.30627L10.8323 9.32127V11.2231H9.78064V6.30752Z"
					fill="white"
				/>
				<path
					d="M17.077 6.30752H18.1137V11.2231H17.082L14.8341 8.04071V11.2231H13.7747V6.30752H14.8224L17.077 9.46738V6.30752Z"
					fill="white"
				/>
				<path
					d="M23.2802 7.37458L22.5764 8.03355C22.4299 7.77891 22.2468 7.58892 22.0305 7.46275C21.8126 7.33666 21.5863 7.27345 21.3484 7.27345C20.964 7.27345 20.6305 7.41956 20.3474 7.71135C20.0637 8.00356 19.9223 8.348 19.9223 8.74467C19.9223 9.16664 20.0637 9.52445 20.3474 9.81726C20.6305 10.1108 20.9723 10.2572 21.3716 10.2572C21.5879 10.2572 21.7976 10.2027 21.998 10.0928C22.1986 9.98263 22.3607 9.77697 22.4832 9.47487H21.3184V8.51643H23.5881V9.153C23.5881 9.47981 23.4748 9.83124 23.2503 10.2066C23.0256 10.5826 22.7301 10.8572 22.3634 11.0303C21.9966 11.204 21.6262 11.2905 21.2519 11.2905C20.5729 11.2905 19.9996 11.0449 19.533 10.5531C19.066 10.0615 18.8324 9.45357 18.8324 8.72968C18.8324 8.04352 19.0731 7.45679 19.5536 6.97024C20.0338 6.48336 20.6129 6.24013 21.2884 6.24013C22.152 6.24013 22.8159 6.61848 23.2802 7.37458Z"
					fill="white"
				/>
				<path d="M14.3711 23.1509H11.8153V20.5951H14.3711V23.1509Z" fill="#E0E0E0" />
				<path d="M19.4828 23.1509H16.9269V20.5951H19.4828V23.1509Z" fill="#E0E0E0" />
				<path d="M24.5944 23.1509H22.0386V20.5951H24.5944V23.1509Z" fill="#E0E0E0" />
				<path d="M29.7061 23.1509H27.1502V20.5951H29.7061V23.1509Z" fill="#E0E0E0" />
				<path d="M34.8177 23.1509H32.2619V20.5951H34.8177V23.1509Z" fill="#E0E0E0" />
				<path d="M14.3711 28.2622H11.8153V25.7064H14.3711V28.2622Z" fill="#E0E0E0" />
				<path d="M19.4828 28.2622H16.9269V25.7064H19.4828V28.2622Z" fill="#E0E0E0" />
				<path d="M24.5944 28.2622H22.0386V25.7064H24.5944V28.2622Z" fill="#E0E0E0" />
				<path d="M29.7061 28.2622H27.1502V25.7064H29.7061V28.2622Z" fill="#E0E0E0" />
				<path d="M34.8177 28.2622H32.2619V25.7064H34.8177V28.2622Z" fill="#E0E0E0" />
				<path d="M11.8153 25.7065H9.25946V23.1507H11.8153V25.7065Z" fill="#E0E0E0" />
				<path d="M16.9269 25.7065H14.3711V23.1507H16.9269V25.7065Z" fill="#E0E0E0" />
				<path d="M22.0386 25.7065H19.4828V23.1507H22.0386V25.7065Z" fill="#E0E0E0" />
				<path d="M27.1502 25.7065H24.5944V23.1507H27.1502V25.7065Z" fill="#E0E0E0" />
				<path d="M32.2619 25.7065H29.7061V23.1507H32.2619V25.7065Z" fill="#E0E0E0" />
				<path d="M14.3711 33.374H11.8153V30.8182H14.3711V33.374Z" fill="#E0E0E0" />
				<path d="M19.4828 33.374H16.9269V30.8182H19.4828V33.374Z" fill="#E0E0E0" />
				<path d="M24.5944 33.374H22.0386V30.8182H24.5944V33.374Z" fill="#E0E0E0" />
				<path d="M29.7061 33.374H27.1502V30.8182H29.7061V33.374Z" fill="#E0E0E0" />
				<path d="M34.8177 33.374H32.2619V30.8182H34.8177V33.374Z" fill="#E0E0E0" />
				<path d="M11.8153 30.8179H9.25946V28.262H11.8153V30.8179Z" fill="#E0E0E0" />
				<path d="M16.9269 30.8179H14.3711V28.262H16.9269V30.8179Z" fill="#E0E0E0" />
				<path d="M22.0386 30.8179H19.4828V28.262H22.0386V30.8179Z" fill="#E0E0E0" />
				<path d="M27.1502 30.8179H24.5944V28.262H27.1502V30.8179Z" fill="#E0E0E0" />
				<path d="M32.2619 30.8179H29.7061V28.262H32.2619V30.8179Z" fill="#E0E0E0" />
				<path d="M11.8154 35.9297H9.25961V33.3739H11.8154V35.9297Z" fill="#E0E0E0" />
				<path d="M16.9269 35.9297H14.3711V33.3739H16.9269V35.9297Z" fill="#E0E0E0" />
				<path d="M22.0386 35.9297H19.4828V33.3739H22.0386V35.9297Z" fill="#E0E0E0" />
				<path d="M27.1502 35.9297H24.5944V33.3739H27.1502V35.9297Z" fill="#E0E0E0" />
				<path d="M32.2619 35.9297H29.7061V33.3739H32.2619V35.9297Z" fill="#E0E0E0" />
			</g>
			<defs>
				<filter
					id="filter0_dd_231_2332"
					x="0"
					y="0.000488281"
					width="44.0777"
					height="50.8926"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_231_2332" />
					<feOffset dy="2" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
					/>
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_231_2332" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_231_2332" />
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="3" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
					/>
					<feBlend mode="normal" in2="effect1_dropShadow_231_2332" result="effect2_dropShadow_231_2332" />
					<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_231_2332" result="shape" />
				</filter>
			</defs>
		</svg>
	);
};

const IconQuote = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M19.8511 6C16.4669 6 13.7234 8.74345 13.7234 12.1277C13.7234 13.6269 14.5701 16.5034 16.0213 17.2876M9.12766 6C5.74345 6 3 8.74345 3 12.1277C3 13.6269 3.84672 16.5034 5.29787 17.2876M21 14.8085C21 16.5006 19.6283 17.8723 17.9362 17.8723C16.2441 17.8723 14.8723 16.5006 14.8723 14.8085C14.8723 13.1164 16.2441 11.7447 17.9362 11.7447C19.6283 11.7447 21 13.1164 21 14.8085ZM10.2766 14.8085C10.2766 16.5006 8.90487 17.8723 7.21277 17.8723C5.52066 17.8723 4.14894 16.5006 4.14894 14.8085C4.14894 13.1164 5.52066 11.7447 7.21277 11.7447C8.90487 11.7447 10.2766 13.1164 10.2766 14.8085Z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconRay = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M8.51851 12.0741L7.92592 18L15.6296 9.7037L11.4815 7.33333L12.0741 2L4.37036 10.2963L8.51851 12.0741Z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconCompass = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<mask id="path-1-inside-1_146_469" fill="white">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M7.1125 6.10352e-05C3.18437 6.10352e-05 0 3.18443 0 7.11256C0 11.0407 3.18437 14.2251 7.1125 14.2251C8.77506 14.2251 10.3044 13.6546 11.5155 12.6988L14.5716 15.7549C14.8983 16.0817 15.4282 16.0817 15.7549 15.7549C16.0817 15.4282 16.0817 14.8983 15.7549 14.5716L12.6988 11.5154C13.6546 10.3044 14.225 8.77504 14.225 7.11256C14.225 3.18443 11.0406 6.10352e-05 7.1125 6.10352e-05ZM1.67353 7.11256C1.67353 4.1087 4.10864 1.67359 7.1125 1.67359C10.1164 1.67359 12.5515 4.1087 12.5515 7.11256C12.5515 10.1165 10.1164 12.5515 7.1125 12.5515C4.10864 12.5515 1.67353 10.1165 1.67353 7.11256Z"
				/>
			</mask>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.1125 6.10352e-05C3.18437 6.10352e-05 0 3.18443 0 7.11256C0 11.0407 3.18437 14.2251 7.1125 14.2251C8.77506 14.2251 10.3044 13.6546 11.5155 12.6988L14.5716 15.7549C14.8983 16.0817 15.4282 16.0817 15.7549 15.7549C16.0817 15.4282 16.0817 14.8983 15.7549 14.5716L12.6988 11.5154C13.6546 10.3044 14.225 8.77504 14.225 7.11256C14.225 3.18443 11.0406 6.10352e-05 7.1125 6.10352e-05ZM1.67353 7.11256C1.67353 4.1087 4.10864 1.67359 7.1125 1.67359C10.1164 1.67359 12.5515 4.1087 12.5515 7.11256C12.5515 10.1165 10.1164 12.5515 7.1125 12.5515C4.10864 12.5515 1.67353 10.1165 1.67353 7.11256Z"
				stroke="currentColor"
			/>
			<path
				d="M11.5155 12.6988L15.8777 8.3366L11.9991 4.45802L7.69346 7.8563L11.5155 12.6988ZM15.7549 14.5716L11.3927 18.9338H11.3927L15.7549 14.5716ZM12.6988 11.5154L7.85616 7.69365L4.45821 11.9992L8.33662 15.8776L12.6988 11.5154ZM7.1125 -6.16902C-0.222714 -6.16902 -6.16908 -0.222653 -6.16908 7.11256H6.16908C6.16908 6.59152 6.59146 6.16914 7.1125 6.16914V-6.16902ZM-6.16908 7.11256C-6.16908 14.4477 -0.222724 20.3941 7.1125 20.3941V8.05598C6.59147 8.05598 6.16908 7.63359 6.16908 7.11256H-6.16908ZM7.1125 20.3941C10.2108 20.3941 13.0767 19.3256 15.3375 17.5413L7.69346 7.8563C7.53215 7.98362 7.33937 8.05598 7.1125 8.05598V20.3941ZM7.15327 17.061L10.2094 20.1171L18.9338 11.3927L15.8777 8.3366L7.15327 17.061ZM10.2094 20.1171C12.9453 22.853 17.3812 22.853 20.1171 20.1171L11.3927 11.3927C13.4752 9.3103 16.8514 9.3103 18.9338 11.3927L10.2094 20.1171ZM20.1171 20.1171C22.8531 17.3812 22.8531 12.9453 20.1171 10.2094L11.3927 18.9338C9.31032 16.8513 9.31032 13.4751 11.3927 11.3927L20.1171 20.1171ZM20.1171 10.2094L17.061 7.15325L8.33662 15.8776L11.3927 18.9338L20.1171 10.2094ZM17.5415 15.3372C19.3256 13.0766 20.3941 10.2108 20.3941 7.11256H8.05591C8.05591 7.33932 7.98357 7.5322 7.85616 7.69365L17.5415 15.3372ZM20.3941 7.11256C20.3941 -0.222663 14.4477 -6.16902 7.1125 -6.16902V6.16914C7.63352 6.16914 8.05591 6.59153 8.05591 7.11256H20.3941ZM7.84261 7.11256C7.84261 7.51579 7.51573 7.84267 7.1125 7.84267V-4.49549C0.70155 -4.49549 -4.49555 0.701612 -4.49555 7.11256H7.84261ZM7.1125 7.84267C6.70928 7.84267 6.38239 7.51576 6.38239 7.11256H18.7205C18.7205 0.701644 13.5235 -4.49549 7.1125 -4.49549V7.84267ZM6.38239 7.11256C6.38239 6.70937 6.70931 6.38245 7.1125 6.38245V18.7206C13.5235 18.7206 18.7205 13.5235 18.7205 7.11256H6.38239ZM7.1125 6.38245C7.51569 6.38245 7.84261 6.70934 7.84261 7.11256H-4.49555C-4.49555 13.5236 0.701583 18.7206 7.1125 18.7206V6.38245Z"
				stroke="currentColor"
				mask="url(#path-1-inside-1_146_469)"
			/>
		</svg>
	);
};

const IconSend = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M14.0469 1.95306L6.9376 9.06238M2.18071 5.49018L13.2513 1.64936C13.9331 1.41284 14.5871 2.06692 14.3506 2.74868L10.5098 13.8193C10.2467 14.5777 9.18168 14.5985 8.88916 13.8509L7.13123 9.35843C7.04343 9.13406 6.86592 8.95655 6.64155 8.86875L2.14906 7.11082C1.4015 6.8183 1.4223 5.7533 2.18071 5.49018Z"
				stroke="currentColor"
				strokeLinecap="round"
			/>
		</svg>
	);
};

const IconUserV2 = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M16.0253 20.5707L16.0256 17.3569C16.0258 15.5818 14.5867 14.1426 12.8115 14.1426H5.61432C3.83939 14.1426 2.40046 15.5814 2.40026 17.3563L2.3999 20.5707M21.5996 20.5709L21.5999 17.3571C21.6001 15.5819 20.161 14.1428 18.3858 14.1428M15.4062 4.06048C16.1955 4.64612 16.7071 5.58498 16.7071 6.64331C16.7071 7.70164 16.1955 8.64049 15.4062 9.22613M12.4937 6.64313C12.4937 8.41821 11.0547 9.85719 9.27964 9.85719C7.50457 9.85719 6.06559 8.41821 6.06559 6.64313C6.06559 4.86806 7.50457 3.42908 9.27964 3.42908C11.0547 3.42908 12.4937 4.86806 12.4937 6.64313Z"
				strokeWidth={strokeWidth}
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconStar = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="32"
			height="31"
			viewBox="0 0 32 31"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<rect width="32" height="31" fill="none" />
			<g id="Registrar">
				<rect width="1440" height="1024" transform="translate(-425 -309)" fill="none" />
				<g id="Frame 304">
					<g id="Frame 298">
						<g id="Frame 305">
							<g id="&#240;&#159;&#166;&#134; emoji &#34;sparkles&#34;">
								<path
									id="Vector"
									d="M31.5963 14.9147L27.8398 13.7039C25.4371 12.9111 24.0294 10.9668 23.3687 8.52358L21.7156 0.471264C21.6725 0.31216 21.5673 0.0991211 21.2437 0.0991211C20.9714 0.0991211 20.8149 0.31216 20.7718 0.471264L19.1187 8.52628C18.4553 10.9695 17.0504 12.9138 14.6476 13.7066L10.8911 14.9174C10.3599 15.09 10.3518 15.8397 10.8803 16.0204L14.6638 17.3229C17.0585 18.1184 18.4553 20.06 19.1187 22.4924L20.7745 30.4558C20.8176 30.6149 20.9066 30.9007 21.2464 30.9007C21.6051 30.9007 21.6752 30.6149 21.7183 30.4558L23.3741 22.4924C24.0375 20.0573 25.4344 18.1157 27.829 17.3229L31.6125 16.0204C32.1357 15.837 32.1276 15.0873 31.5963 14.9147Z"
									fill="#FDD835"
								/>
								<path
									id="Vector_2"
									d="M31.9523 15.2518C31.893 15.1035 31.7771 14.974 31.5964 14.9147L27.8399 13.7039C25.4371 12.9111 24.0295 10.9668 23.3688 8.52356L21.7157 0.471241C21.6914 0.379553 21.6051 0.212359 21.5054 0.163818L22.0393 8.2458C22.4357 11.9349 22.7755 13.6715 25.7203 14.1785C28.2498 14.6154 31.1757 15.117 31.9523 15.2518Z"
									fill="#FFEE58"
								/>
								<path
									id="Vector_3"
									d="M31.9605 15.6726L25.4453 17.1666C23.1504 17.7491 21.8857 19.0785 21.8857 22.5573L21.2466 30.9008C21.465 30.8792 21.643 30.7606 21.7185 30.4559L23.3743 22.4925C24.0377 20.0574 25.4345 18.1158 27.8292 17.323L31.6127 16.0205C31.7906 15.9558 31.9039 15.8236 31.9605 15.6726Z"
									fill="#F4B400"
								/>
								<path
									id="Vector_4"
									d="M10.0823 21.9206C7.83592 21.179 7.63097 20.3431 7.25344 18.9327L6.31229 15.6319C6.25566 15.4189 5.70015 15.4189 5.64082 15.6319L5.0017 18.6819C4.62147 20.0869 3.81246 21.2033 2.43176 21.659L0.231259 22.6137C-0.0734669 22.7135 -0.0788603 23.1449 0.225866 23.2474L2.44254 24.0321C3.81786 24.4879 4.62147 25.6043 5.0044 27.0039L5.64351 29.9217C5.70284 30.1347 6.25566 30.1347 6.31229 29.9217L7.06197 27.0174C7.44221 25.6097 8.02469 24.4906 9.8935 24.0321L11.9753 23.2474C12.2801 23.1422 12.2774 22.7108 11.9699 22.611L10.0823 21.9206Z"
									fill="#FDD835"
								/>
								<path
									id="Vector_5"
									d="M6.4904 18.8843C6.71961 21.0039 6.83557 21.5918 8.55336 22.0313L12.1319 22.7298C12.0941 22.6785 12.0402 22.6354 11.9674 22.6138L10.0797 21.9208C8.10841 21.2466 7.56368 20.3891 7.19423 18.674C6.82479 16.9589 6.43107 15.8397 6.43107 15.8397C6.29354 15.4703 6.09668 15.4892 6.09668 15.4892L6.4904 18.8843Z"
									fill="#FFEE58"
								/>
								<g id="Group">
									<path
										id="Vector_6"
										d="M6.55446 26.284C6.55446 24.2858 7.64662 23.2961 9.38329 23.2961L12.0854 23.1855C12.0854 23.1855 11.929 23.3932 11.6566 23.4579L9.89296 24.0323C8.3963 24.6337 7.71404 24.9357 7.25021 26.9825C7.25021 26.9825 6.65154 29.3637 6.53828 29.6145C6.38187 29.965 6.1958 30.0378 6.1958 30.0378L6.55446 26.284Z"
										fill="#F4B400"
									/>
									<path
										id="Vector_7"
										d="M14.9167 6.09938C15.0677 6.04814 15.0623 5.8324 14.9086 5.78926L12.8268 5.22835C12.3899 5.10969 12.0501 4.77261 11.9261 4.33844L11.1063 0.954093C11.0658 0.789595 10.8312 0.789595 10.7908 0.95679L10.0195 4.32765C9.90086 4.7753 9.55029 5.12048 9.10264 5.23644L7.03428 5.77308C6.88057 5.81353 6.86978 6.02926 7.0208 6.0832L9.20242 6.83827C9.59344 6.9731 9.89547 7.29131 10.0141 7.68773L10.7935 10.8132C10.8339 10.975 11.0658 10.9777 11.1063 10.8132L11.9126 7.67694C12.0339 7.28053 12.3387 6.96501 12.7324 6.83288L14.9167 6.09938Z"
										fill="#F4B400"
										stroke="#F4B400"
										strokeWidth="0.632944"
										stroke-miterlimit="10"
									/>
								</g>
							</g>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
};

const IconStarV2 = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<g id="Icon">
				<path
					d="M8.88245 0.599998L10.1026 3.89747L13.4001 5.11765L10.1026 6.33782L8.88245 9.63529L7.66228 6.33782L4.3648 5.11765L7.66228 3.89747L8.88245 0.599998Z"
					stroke="currentColor"
					strokeLinejoin="round"
				/>
				<path
					d="M3.23539 8.12941L4.30128 9.69882L5.87069 10.7647L4.30128 11.8306L3.23539 13.4L2.16951 11.8306L0.600098 10.7647L2.16951 9.69882L3.23539 8.12941Z"
					stroke="currentColor"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

const IconTrash = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M3 4.63235H15M6.75 2.25H11.25M11.625 15.75H6.375C5.54657 15.75 4.875 15.0389 4.875 14.1618L4.53255 5.45953C4.5148 5.00837 4.85544 4.63235 5.2819 4.63235H12.7181C13.1446 4.63235 13.4852 5.00837 13.4674 5.45953L13.125 14.1618C13.125 15.0389 12.4534 15.75 11.625 15.75Z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
			/>
		</svg>
	);
};

const IconUser = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M18.6996 19.8L18.6999 16.5003C18.7 14.6776 17.2225 13.2 15.3999 13.2H6.60054C4.77815 13.2 3.30075 14.6772 3.30054 16.4996L3.30017 19.8M14.3002 5.5C14.3002 7.32254 12.8227 8.8 11.0002 8.8C9.17763 8.8 7.70017 7.32254 7.70017 5.5C7.70017 3.67746 9.17763 2.2 11.0002 2.2C12.8227 2.2 14.3002 3.67746 14.3002 5.5Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconVerificado = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="12"
			height="7"
			viewBox="0 0 12 7"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M1 1L6.00081 5.58L11 1"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconWord = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="25"
			height="24"
			viewBox="0 0 25 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M13.75 20.7165C13.0309 20.9016 12.2769 21 11.5 21C6.52944 21 2.5 16.9706 2.5 12C2.5 7.02944 6.52944 3 11.5 3C16.0896 3 19.8768 6.4354 20.4304 10.875M3.625 15.375H6.25C7.28554 15.375 8.125 14.5355 8.125 13.5V11.0625C8.125 10.027 8.96447 9.1875 10 9.1875H11.875C12.9105 9.1875 13.75 8.34804 13.75 7.3125V4.125M19.4196 17.6457L21.996 16.755C22.4789 16.588 22.4951 15.911 22.0207 15.7212L15.633 13.1657C15.1887 12.988 14.7442 13.4215 14.9108 13.8702L17.3441 20.4217C17.5219 20.9005 18.1987 20.9015 18.378 20.4233L19.4196 17.6457Z"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconXls = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="63"
			height="74"
			viewBox="0 0 63 74"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
			fill="none"
		>
			<g filter="url(#filter0_dd_231_2202)">
				<mask
					id="mask0_231_2202"
					style={{ maskType: "luminance" }}
					maskUnits="userSpaceOnUse"
					x="5"
					y="24"
					width="53"
					height="41"
				>
					<path d="M57.9711 64.5649H5V24.8366H57.9711V64.5649Z" fill="white" />
				</mask>
				<g mask="url(#mask0_231_2202)">
					<path
						d="M11.6212 63.9028C8.33486 63.9028 5.66199 61.2294 5.66199 57.9436V7.62102C5.66199 4.3347 8.33486 1.66177 11.6212 1.66177H43.1292L57.3088 15.8408V57.9436C57.3088 61.2294 54.6355 63.9028 51.3496 63.9028H11.6212Z"
						fill="#F6F6F6"
					/>
					<path
						d="M43.4035 0.999606H11.6214C7.96462 0.999606 5 3.96427 5 7.621V57.9436C5 61.6003 7.96462 64.5649 11.6214 64.5649H51.3497C55.0065 64.5649 57.9711 61.6003 57.9711 57.9436V15.5667L43.4035 0.999606ZM42.8551 2.32388L56.6468 16.115V57.9436C56.6468 60.8642 54.2704 63.2407 51.3497 63.2407H11.6214C8.70073 63.2407 6.32428 60.8642 6.32428 57.9436V7.621C6.32428 4.7003 8.70073 2.32388 11.6214 2.32388H42.8551Z"
						fill="#E0E0E0"
					/>
				</g>
				<mask
					id="mask1_231_2202"
					style={{ maskType: "luminance" }}
					maskUnits="userSpaceOnUse"
					x="5"
					y="1"
					width="53"
					height="24"
				>
					<path d="M57.9706 24.8364H5V0.999957H57.9706V24.8364Z" fill="white" />
				</mask>
				<g mask="url(#mask1_231_2202)">
					<path
						d="M11.6212 63.9028C8.33486 63.9028 5.66199 61.2294 5.66199 57.9436V7.62102C5.66199 4.3347 8.33486 1.66177 11.6212 1.66177H43.1292L57.3088 15.8408V57.9436C57.3088 61.2294 54.6355 63.9028 51.3496 63.9028H11.6212Z"
						fill="#68AB46"
					/>
					<path
						d="M43.4035 0.999606H11.6214C7.96462 0.999606 5 3.96427 5 7.621V57.9436C5 61.6003 7.96462 64.5649 11.6214 64.5649H51.3497C55.0065 64.5649 57.9711 61.6003 57.9711 57.9436V15.5667L43.4035 0.999606ZM42.8551 2.32388L56.6468 16.115V57.9436C56.6468 60.8642 54.2704 63.2407 51.3497 63.2407H11.6214C8.70073 63.2407 6.32428 60.8642 6.32428 57.9436V7.621C6.32428 4.7003 8.70073 2.32388 11.6214 2.32388H42.8551Z"
						fill="#5C973E"
					/>
				</g>
				<mask
					id="mask2_231_2202"
					style={{ maskType: "luminance" }}
					maskUnits="userSpaceOnUse"
					x="5"
					y="1"
					width="53"
					height="24"
				>
					<path d="M57.9706 24.8364H5V0.999957H57.9706V24.8364Z" fill="white" />
				</mask>
				<g mask="url(#mask2_231_2202)">
					<mask
						id="mask3_231_2202"
						style={{ maskType: "luminance" }}
						maskUnits="userSpaceOnUse"
						x="5"
						y="0"
						width="53"
						height="65"
					>
						<path
							d="M57.9711 57.9436C57.9711 61.6003 55.0065 64.5649 51.3497 64.5649H11.6214C7.96462 64.5649 5 61.6003 5 57.9436V7.621C5 3.96427 7.96462 0.999606 11.6214 0.999606H43.4035L57.9711 15.5667V57.9436Z"
							fill="white"
						/>
					</mask>
					<g mask="url(#mask3_231_2202)">
						<path d="M45.3046 13.5838L58.1226 26.4019V13.5838H45.3046Z" fill="#5C973E" />
						<path
							d="M57.971 15.5664H50.0254C46.3687 15.5664 43.404 12.6017 43.404 8.94502V0.999352H57.971V15.5664Z"
							fill="#B3D5A2"
						/>
					</g>
				</g>
				<path
					d="M28.837 48.6737V44.7008H46.0526V48.6737H28.837ZM16.9185 44.7008H26.1885V48.6737H16.9185V44.7008ZM26.1885 36.7552V40.728H16.9185V36.7552H26.1885ZM46.0526 36.7552V40.728H28.837V36.7552H46.0526ZM12.9457 32.7823V52.6465H50.0255V32.7823H12.9457Z"
					fill="#E0E0E0"
				/>
				<path
					d="M12.087 9.24967H13.8375L15.3718 11.5862L16.96 9.24967H18.6635L16.2445 12.8816L18.902 16.8906H17.2005L15.3832 14.1748L13.5748 16.8906H11.8367L14.5214 12.8868L12.087 9.24967Z"
					fill="white"
				/>
				<path d="M19.9957 9.24967H21.6309V15.2435H23.8833V16.8906H19.9957V9.24967Z" fill="white" />
				<path
					d="M29.3363 9.94175L28.312 11.0654C27.773 10.7472 27.3844 10.5879 27.1481 10.5879C26.9654 10.5879 26.8088 10.6573 26.6769 10.7943C26.5449 10.9319 26.4786 11.0964 26.4786 11.2863C26.4786 11.6628 26.8202 11.9887 27.503 12.2639C28.0037 12.4776 28.3819 12.6711 28.6379 12.8428C28.894 13.0161 29.1081 13.2551 29.2809 13.5618C29.4531 13.8681 29.5401 14.2002 29.5401 14.5571C29.5401 15.2125 29.2758 15.7831 28.7455 16.2678C28.2164 16.753 27.5904 16.9951 26.8688 16.9951C26.0773 16.9951 25.2957 16.6231 24.5233 15.8782L25.6061 14.615C26.0908 15.1158 26.5449 15.3656 26.9676 15.3656C27.1657 15.3656 27.3556 15.2777 27.5381 15.1018C27.7202 14.9254 27.8118 14.7408 27.8118 14.5473C27.8118 14.149 27.3907 13.7973 26.5486 13.4931C26.0675 13.3181 25.7261 13.1537 25.5242 13.0006C25.3225 12.8475 25.1529 12.6239 25.0158 12.3306C24.8772 12.0383 24.8083 11.7384 24.8083 11.4316C24.8083 10.7529 25.0297 10.202 25.4721 9.77886C25.9144 9.35615 26.4927 9.14467 27.2066 9.14467C28.0518 9.14467 28.7621 9.41058 29.3363 9.94175Z"
					fill="white"
				/>
			</g>
			<defs>
				<filter
					id="filter0_dd_231_2202"
					x="0"
					y="0"
					width="62.9711"
					height="73.5649"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_231_2202" />
					<feOffset dy="2" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
					/>
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_231_2202" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_231_2202" />
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="3" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
					/>
					<feBlend mode="normal" in2="effect1_dropShadow_231_2202" result="effect2_dropShadow_231_2202" />
					<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_231_2202" result="shape" />
				</filter>
			</defs>
		</svg>
	);
};

const IconCoins = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M9.49332 17.8821C9.09253 17.9594 8.67788 18 8.25334 18C4.79972 18 2 15.3137 2 12C2 8.68629 4.79972 6 8.25334 6C8.67788 6 9.09253 6.04059 9.49332 6.11795M22 12C22 15.3137 19.2003 18 15.7467 18C12.293 18 9.49332 15.3137 9.49332 12C9.49332 8.68629 12.293 6 15.7467 6C19.2003 6 22 8.68629 22 12Z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
			/>
		</svg>
	);
};

const IconLightning = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="16"
			height="22"
			viewBox="0 0 16 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M6.22222 13.4889L5.51111 20.6L14.7556 10.6444L9.77778 7.79999L10.4889 1.39999L1.24445 11.3555L6.22222 13.4889Z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconBluilding = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
			// class="lucide lucide-building-2"
		>
			<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
			<path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
			<path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
			<path d="M10 6h4" />
			<path d="M10 10h4" />
			<path d="M10 14h4" />
			<path d="M10 18h4" />
		</svg>
	);
};

const IconUserV3 = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M2.39999 21.6L2.4004 17.9996C2.40062 16.0116 4.01233 14.4 6.0004 14.4H12.6M16.8 11.2715L19.2 8.70002M19.2 8.70002L21.6 11.2715M19.2 8.70002V15.3M14.4 6.00002C14.4 7.98825 12.7882 9.60002 10.8 9.60002C8.81177 9.60002 7.19999 7.98825 7.19999 6.00002C7.19999 4.0118 8.81177 2.40002 10.8 2.40002C12.7882 2.40002 14.4 4.0118 14.4 6.00002Z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconClipboardList = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
			stroke="currentColor"
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
			<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
			<path d="M12 11h4" />
			<path d="M12 16h4" />
			<path d="M8 11h.01" />
			<path d="M8 16h.01" />
		</svg>
	);
};

const IconUserV4 = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M1.39999 20.6L1.4004 16.9996C1.40062 15.0116 3.01233 13.4 5.0004 13.4H12.1999M15.2 16.4L16.4 17.6L20.6 13.4M16.4 1.40002C17.8562 2.2163 18.8 3.5249 18.8 5.00002C18.8 6.47515 17.8562 7.78375 16.4 8.60002M13.4 5.00002C13.4 6.98825 11.7882 8.60002 9.79999 8.60002C7.81177 8.60002 6.19999 6.98825 6.19999 5.00002C6.19999 3.0118 7.81177 1.40002 9.79999 1.40002C11.7882 1.40002 13.4 3.0118 13.4 5.00002Z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconAvatarNull = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<g clipPath="url(#clip0_44_2836)">
				<rect width="40" height="40" rx="20" fill="#6659B5" />
				<g clipPath="url(#clip1_44_2836)">
					<path
						d="M20 20C20.8307 20 21.6427 19.7536 22.3334 19.2921C23.0241 18.8306 23.5624 18.1747 23.8803 17.4072C24.1982 16.6398 24.2814 15.7953 24.1193 14.9806C23.9573 14.1659 23.5572 13.4175 22.9699 12.8301C22.3825 12.2427 21.6341 11.8427 20.8194 11.6807C20.0047 11.5186 19.1602 11.6018 18.3927 11.9197C17.6253 12.2376 16.9693 12.7759 16.5078 13.4666C16.0463 14.1573 15.8 14.9693 15.8 15.8C15.8011 16.9135 16.244 17.9812 17.0314 18.7686C17.8188 19.556 18.8865 19.9989 20 20ZM20 13C20.5538 13 21.0952 13.1642 21.5556 13.4718C22.0161 13.7795 22.375 14.2168 22.5869 14.7284C22.7988 15.2401 22.8543 15.8031 22.7462 16.3462C22.6382 16.8894 22.3715 17.3883 21.9799 17.7799C21.5883 18.1714 21.0894 18.4381 20.5463 18.5462C20.0031 18.6542 19.4401 18.5988 18.9285 18.3868C18.4169 18.1749 17.9796 17.816 17.6719 17.3556C17.3642 16.8951 17.2 16.3538 17.2 15.8C17.2 15.0574 17.495 14.3452 18.0201 13.8201C18.5452 13.295 19.2574 13 20 13Z"
						fill="#C7BCFD"
					/>
					<path
						d="M20 21.4004C18.3297 21.4023 16.7284 22.0666 15.5473 23.2477C14.3662 24.4288 13.7019 26.0301 13.7 27.7004C13.7 27.8861 13.7738 28.0641 13.905 28.1954C14.0363 28.3267 14.2144 28.4004 14.4 28.4004C14.5857 28.4004 14.7637 28.3267 14.895 28.1954C15.0263 28.0641 15.1 27.8861 15.1 27.7004C15.1 26.4009 15.6163 25.1545 16.5352 24.2356C17.4541 23.3167 18.7005 22.8004 20 22.8004C21.2996 22.8004 22.5459 23.3167 23.4648 24.2356C24.3838 25.1545 24.9 26.4009 24.9 27.7004C24.9 27.8861 24.9738 28.0641 25.105 28.1954C25.2363 28.3267 25.4144 28.4004 25.6 28.4004C25.7857 28.4004 25.9637 28.3267 26.095 28.1954C26.2263 28.0641 26.3 27.8861 26.3 27.7004C26.2982 26.0301 25.6338 24.4288 24.4527 23.2477C23.2717 22.0666 21.6703 21.4023 20 21.4004Z"
						fill="#C7BCFD"
					/>
				</g>
			</g>
			<defs>
				<clipPath id="clip0_44_2836">
					<rect width="40" height="40" rx="20" fill="white" />
				</clipPath>
				<clipPath id="clip1_44_2836">
					<rect width="16.8" height="16.8" fill="white" transform="translate(11.6 11.6)" />
				</clipPath>
			</defs>
		</svg>
	);
};
const IconArrowDouble = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="24"
			height="25"
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M17 11.695L21 7.69501L17 3.69501"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21 7.69501H9"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7 21.695L3 17.695L7 13.695"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15 17.695H3"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconCodeBox = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="24"
			height="25"
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M21 16.695V8.69503C20.9996 8.34431 20.9071 7.99984 20.7315 7.69619C20.556 7.39255 20.3037 7.14039 20 6.96503L13 2.96503C12.696 2.78949 12.3511 2.69708 12 2.69708C11.6489 2.69708 11.304 2.78949 11 2.96503L4 6.96503C3.69626 7.14039 3.44398 7.39255 3.26846 7.69619C3.09294 7.99984 3.00036 8.34431 3 8.69503V16.695C3.00036 17.0458 3.09294 17.3902 3.26846 17.6939C3.44398 17.9975 3.69626 18.2497 4 18.425L11 22.425C11.304 22.6006 11.6489 22.693 12 22.693C12.3511 22.693 12.696 22.6006 13 22.425L20 18.425C20.3037 18.2497 20.556 17.9975 20.7315 17.6939C20.9071 17.3902 20.9996 17.0458 21 16.695Z"
				stroke="currentColor"
				strokeWidth={1}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.5 4.90503L12 7.50503L16.5 4.90503"
				stroke="currentColor"
				strokeWidth={1}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.5 20.485V15.295L3 12.695"
				stroke="currentColor"
				strokeWidth={1}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21 12.695L16.5 15.295V20.485"
				stroke="currentColor"
				strokeWidth={1}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.27002 7.65503L12 12.705L20.73 7.65503"
				stroke="currentColor"
				strokeWidth={1}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 22.775V12.695"
				stroke="currentColor"
				strokeWidth={1}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconLightningV2 = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M9 18H15"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10 22H14"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15.09 14C15.27 13.02 15.74 12.26 16.5 11.5C16.9829 11.0555 17.3662 10.5138 17.6247 9.91058C17.8832 9.30734 18.0111 8.65621 18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 9 6.23 10.23 7.5 11.5C8.22405 12.1621 8.718 13.0379 8.91 14"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconSetting = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M20 7h-9M14 17H5M17 20a3 3 0 100-6 3 3 0 000 6zM7 10a3 3 0 100-6 3 3 0 000 6z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconFilter = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M5.38453 9.99998H14.6153M3.33325 5.83331H16.6666M8.46146 14.1666H11.5384"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconEyeFile = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M10.8 21.6H4.80001C3.47453 21.6 2.40002 20.5254 2.40002 19.2L2.40012 4.80001C2.40013 3.47453 3.47464 2.40002 4.80012 2.40002H15.6004C16.9259 2.40002 18.0004 3.47454 18.0004 4.80002V9.60002M17.4 17.349V17.2858M6.6004 7.20002H13.8004M6.6004 10.8H13.8004M6.6004 14.4H10.2004M21.6 17.4C21.6 17.4 20.6039 20.3397 17.4 20.2883C14.1962 20.237 13.2 17.4 13.2 17.4C13.2 17.4 14.1558 14.409 17.4 14.409C20.6443 14.409 21.6 17.4 21.6 17.4Z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconKey = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M9.00023 8.99975H9.1214M18.0011 21.6L11.3083 15.0024C10.0131 15.5043 8.46573 15.3072 7.02821 14.8866C3.60467 13.8851 1.65293 10.3374 2.66888 6.96247C3.68483 3.58758 7.28374 1.66357 10.7073 2.66508C14.1308 3.6666 16.0826 7.21437 15.0666 10.5893L14.9072 11.4546L21.6 18.0522V21.6H18.0011Z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconSave = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M6.9375 19.875V14.8125C6.9375 14.1912 7.44118 13.6875 8.0625 13.6875H15.9375C16.5588 13.6875 17.0625 14.1912 17.0625 14.8125V20.4375M14.8125 7.5L8.0625 7.5C7.44118 7.5 6.9375 6.99632 6.9375 6.375L6.9375 3M20.4351 6.93513L17.0649 3.56487C16.7032 3.20319 16.2127 3 15.7012 3H4.92857C3.86344 3 3 3.86344 3 4.92857V19.0714C3 20.1366 3.86344 21 4.92857 21H19.0714C20.1366 21 21 20.1366 21 19.0714V8.29883C21 7.78734 20.7968 7.2968 20.4351 6.93513Z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

const IconNotFound = ({ className, size, variant, ...props }: IPropsIcon) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(iconVariants({ variant, size, className }))}
			{...props}
		>
			<path
				d="M16.927 17.0401L20.4001 20.4001M19.2801 11.4401C19.2801 15.77 15.77 19.2801 11.4401 19.2801C7.11019 19.2801 3.6001 15.77 3.6001 11.4401C3.6001 7.11019 7.11019 3.6001 11.4401 3.6001C15.77 3.6001 19.2801 7.11019 19.2801 11.4401Z"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				stroke-linecap="round"
			/>
			<path
				d="M9 9L14 14"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M9 14L14 9"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export const icons = [
	{ id: 1, name: "IconAdd" },
	{ id: 2, name: "IconAlertCicle" },
	{ id: 3, name: "IconAlertError" },
	{ id: 4, name: "IconArrow" },
	{ id: 5, name: "IconArrowDouble" },
	{ id: 6, name: "IconArrowSmall" },
	{ id: 7, name: "IconAvatarNull" },
	{ id: 8, name: "IconBell" },
	{ id: 9, name: "IconBluilding" },
	{ id: 10, name: "IconCamera" },
	{ id: 11, name: "IconClipboardList" },
	{ id: 12, name: "IconClose" },
	{ id: 13, name: "IconCloud" },
	{ id: 14, name: "IconCloud03" },
	{ id: 15, name: "IconCodeBox" },
	{ id: 16, name: "IconCoins" },
	{ id: 17, name: "IconCompass" },
	{ id: 18, name: "IconDoc" },
	{ id: 19, name: "IconDocDefault" },
	{ id: 20, name: "IconEyeClose" },
	{ id: 21, name: "IconEyeFile" },
	{ id: 22, name: "IconEyeOpen" },
	{ id: 23, name: "IconFilter" },
	{ id: 24, name: "IconFolder" },
	{ id: 25, name: "IconHandBye" },
	{ id: 26, name: "IconHelp" },
	{ id: 27, name: "IconHouse" },
	{ id: 28, name: "IconJpg" },
	{ id: 29, name: "IconKey" },
	{ id: 30, name: "IconLayer" },
	{ id: 31, name: "IconLightning" },
	{ id: 32, name: "IconLightningV2" },
	{ id: 33, name: "IconLoading" },
	{ id: 34, name: "IconLogoCanto" },
	{ id: 35, name: "IconLogout" },
	{ id: 36, name: "IconMargaridaHorizontalAlt" },
	{ id: 37, name: "IconMenuHamburguer" },
	{ id: 38, name: "IconMessage" },
	{ id: 39, name: "IconMicrosoft" },
	{ id: 40, name: "IconNotification" },
	{ id: 41, name: "IconPdf" },
	{ id: 42, name: "IconPencil" },
	{ id: 43, name: "IconPng" },
	{ id: 44, name: "IconQuote" },
	{ id: 45, name: "IconRay" },
	{ id: 46, name: "IconSearch" },
	{ id: 47, name: "IconSend" },
	{ id: 48, name: "IconSetting" },
	{ id: 49, name: "IconStar" },
	{ id: 50, name: "IconStarV2" },
	{ id: 51, name: "IconTrash" },
	{ id: 52, name: "IconUser" },
	{ id: 53, name: "IconUserV2" },
	{ id: 54, name: "IconUserV3" },
	{ id: 55, name: "IconUserV4" },
	{ id: 56, name: "IconVerificado" },
	{ id: 57, name: "IconWord" },
	{ id: 58, name: "IconXls" },
	{ id: 59, name: "IconSave" },
	{ id: 60 , name: "IconNotFound"}
];

export {
	IconAdd,
	IconAlertCicle,
	IconAlertError,
	IconArrow,
	IconArrowDouble,
	IconArrowSmall,
	IconAvatarNull,
	IconBell,
	IconBluilding,
	IconCamera,
	IconClipboardList,
	IconClose,
	IconCloud,
	IconCloud03,
	IconCodeBox,
	IconCoins,
	IconCompass,
	IconDoc,
	IconDocDefault,
	IconEyeClose,
	IconEyeFile,
	IconEyeOpen,
	IconFilter,
	IconFolder,
	IconHandBye,
	IconHelp,
	IconHouse,
	IconJpg,
	IconKey,
	IconLayer,
	IconLightning,
	IconLightningV2,
	IconLoading,
	IconLogoCanto,
	IconLogout,
	IconMargaridaHorizontalAlt,
	IconMenuHamburguer,
	IconMessage,
	IconMicrosoft, IconNotFound, IconNotification,
	IconPdf,
	IconPencil,
	IconPng,
	IconQuote,
	IconRay,
	IconSave,
	IconSearch,
	IconSend,
	IconSetting,
	IconStar,
	IconStarV2,
	IconTrash,
	IconUser,
	IconUserV2,
	IconUserV3,
	IconUserV4,
	IconVerificado,
	IconWord,
	IconXls
};


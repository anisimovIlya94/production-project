import { DropdownDirection } from "../../../lib/types/ui"
import cls from "./popup.module.scss"

export const mapDropdownDirection: Record<DropdownDirection, string> = {
	"top left": cls.dropdownTopLeft,
	"top right": cls.dropdownTopRight,
	"bottom left": cls.dropdownBottomLeft,
	"bottom right": cls.dropdownBottomRight,
}
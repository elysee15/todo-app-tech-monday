import classNames from "classnames";
import { Label } from "src/@types/Label";
import { labelColorMap } from "src/constants/label";

const getLabelColor = (label: Label) => {
  return labelColorMap[label];
};

export default function LabelBadge({ label }: { label: string }) {
  return (
    <span
      className={classNames(
        `inline-block rounded-full px-2 py-1 text-xs text-white bg-${getLabelColor(
          label as Label
        )}-500`
      )}
    >
      {label}
    </span>
  );
}

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import DarkIcon from "../../assets/icons/theme-dark.svg";
import LightIcon from "../../assets/icons/theme-light.svg";

import type { PropsWithChildren } from "react";
import { Theme, useThemes } from "app/providers/themeProvider";
import { Button, ButtonTheme } from "../Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher(props: PropsWithChildren<ThemeSwitcherProps>) {
  const { className } = props;
  const { theme, toggleTheme } = useThemes();

  return (
      <Button
          theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
}
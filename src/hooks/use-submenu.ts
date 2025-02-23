
import { useState } from "react";

export const useSubmenu = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  return {
    activeSubmenu,
    toggleSubmenu
  };
};

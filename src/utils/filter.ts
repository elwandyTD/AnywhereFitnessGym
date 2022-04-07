import { ClassListModel, FilterGetAllClass } from "App/types/class";

export const filterClassList = (classList: ClassListModel[] = [], filterBy: FilterGetAllClass = {}): ClassListModel[] => {
  if (filterBy.name == "" && filterBy.category === "All" && filterBy.types === "All") {
    return classList
  }

  const classes: ClassListModel[] = classList.filter((item) => {
    const fixName = item.content.title?.toLowerCase();

    const filterName = filterBy.name && (fixName?.includes(filterBy.name?.toLocaleLowerCase() || "") || false) || false;
    const filterType = (filterBy.types !== "All") && item.types_name === filterBy.types;
    const filterCategory = (filterBy.category !== "All") && (item.category_name === filterBy.category);

    if (filterBy.name && (filterBy.category !== "All") && (filterBy.types !== "All")) {
      if (filterName && filterType && filterCategory) {
        return item;
      } else {
        return;
      }
    }

    if ((filterBy.category !== "All") && filterBy.name) {
      if (filterCategory && filterName) {
        return item;
      } else {
        return;
      }
    }
    if ((filterBy.category !== "All") && (filterBy.types !== "All")) {
      if (filterCategory && filterType) {
        return item;
      } else {
        return;
      }
    }
    if (filterBy.name && (filterBy.types !== "All")) {
      if (filterName && filterType) {
        return item;
      } else {
        return;
      }
    }

    if ((filterBy.category !== "All") && filterCategory) {
      return item;
    }
    if ((filterBy.types !== "All") && filterType) {
      return item;
    }
    if (filterBy.name !== "" && filterName) {
      return item;
    }

    
    return;
  });


  return classes;
}
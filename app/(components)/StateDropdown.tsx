"use client";
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const StateDropdown = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["State"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize">
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <DropdownItem key="Employee">Employee</DropdownItem>
          <DropdownItem key="Admin">Admin</DropdownItem>
          <DropdownItem key="Secretary">Secretary</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default StateDropdown;

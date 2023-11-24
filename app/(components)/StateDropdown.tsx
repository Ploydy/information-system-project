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
          <DropdownItem key="employee">Employee</DropdownItem>
          <DropdownItem value="admin">Admin</DropdownItem>
          <DropdownItem value="secretary">Secretary</DropdownItem>
          <DropdownItem value="user">User</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default StateDropdown;

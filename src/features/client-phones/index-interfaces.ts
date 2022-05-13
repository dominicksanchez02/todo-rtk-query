export interface PhoneListProps {
  clientPhoneList: Array<ItemProps>;
  onDelete?(id: string): void;
  onEdit?(props: ItemProps): void;
}

export interface ItemProps {
  rid: string;
  name: string;
  rcpid: string;
  phoneType: string;
  createTime?: number;
  updateTime?: number;
  clientPhone: string;
  extension: string | null;
  createTimeInString?: string;
  updateTimeInString?: string;
}

export interface PhoneItemProps extends ItemProps {
  onDelete?(id: string): void;
  onEdit?(props: ItemProps): void;
}


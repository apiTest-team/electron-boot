import { ObjectIdentifier } from "@electron-boot/decorator";

export interface IdentifierRelationShipInterface {
  saveClassRelation(module: any, namespace?: string);
  saveFunctionRelation(ObjectIdentifier, uuid);
  hasRelation(id: ObjectIdentifier): boolean;
  getRelation(id: ObjectIdentifier): string;
}
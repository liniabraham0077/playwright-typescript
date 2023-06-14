export type PageId = string;
export type ElementKey = string;
export type ElementLocator = string;
export type PageElementMappings = Record<
  PageId,
  Record<ElementKey, ElementLocator>
>;

export interface GlobalConfig {
  pageElementMappings: PageElementMappings;
}

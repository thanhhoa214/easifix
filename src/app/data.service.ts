import { Injectable } from '@angular/core';
import { Service, User, Category, LSItemName } from './data.model';
import { DATABASE } from './data';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor() {
    this._setEncode(LSItemName.SERVICES, DATABASE.services);
    this._setEncode(LSItemName.CATEGORIES, DATABASE.categories);
    this._setEncode(LSItemName.USERS, DATABASE.users);
    this._setEncode(LSItemName.SEARCH_HISTORY, DATABASE.searchHistory);
  }

  getUsers(): User[] {
    return DATABASE.users;
  }

  getServices(): Service[] {
    return DATABASE.services;
  }

  getCategories(): Category[] {
    return DATABASE.categories;
  }

  getSearchHistory() {
    return this._getEncode(LSItemName.SEARCH_HISTORY);
  }

  writeSearchHistory(keyword: string): void {
    const searchItems = this._getEncode(LSItemName.SEARCH_HISTORY) ?? [];
    searchItems.push(keyword);
    this._setEncode(LSItemName.SEARCH_HISTORY, searchItems);
  }

  removeSearchHistory(keyword: string): void {
    let searchItems = this._getEncode(LSItemName.SEARCH_HISTORY) ?? [];
    searchItems = searchItems.filter((item) => item !== keyword);
    this._setEncode(LSItemName.SEARCH_HISTORY, searchItems);
  }

  private _getEncode(localStorageItemName: LSItemName) {
    const raw = localStorage.getItem(localStorageItemName);
    return raw ? JSON.parse(raw) : undefined;
  }
  private _setEncode(localStorageItemName: LSItemName, value: any) {
    localStorage.setItem(
      localStorageItemName,
      value ? JSON.stringify(value) : undefined
    );
  }
  // getOrders(): Order[] {}
}

/**
 * Using ES6-style classes
 * See below for an alternative ES5-prototype solution setup
 */

class User {

    constructor(name) {
      this._name = name;
      this._lastLoggedInAt = null;
      this._loggedIn = false;
    }
    isLoggedIn() {
      return this._loggedIn;
    }
    getLastLoggedInAt() {
      return this._lastLoggedInAt;
    }
    logIn() {
      this._loggedIn = true;
      this._lastLoggedInAt = new Date().toLocaleDateString();
    }
    logOut() {
      this._loggedIn = false;
    }
    getName() {
      return this._name;
    }
    setName(name) {
      this._name = name;
    }
    canEdit(comment) {
      return comment.getAuthor().getName() === this._name;
    }
    canDelete(comment) {
      return false;
    }
  }
  
  class Moderator extends User {
    constructor(name) {
      super(name);
    }
    canEdit(comment) {
      return comment.getAuthor().getName() === this._name;
    }
    canDelete(comment) {
      return true;
    }
  }
  
  class Admin extends Moderator {
    constructor(name) {
      super(name);
    }
    canEdit(comment) {
      return true;
    }
    canDelete(comment) {
      return true;
    }
  }
  
  
  class Comment {
    
    constructor(author, message, repliedTo = null) {
      this._author = author;
      this._message = message;
      this._repliedTo = repliedTo;
      this._createdAt = new Date().toString();
    }
    getMessage() {
      return this._message;
    }
    setMessage(message) {
      this._message = message;
    }
    getCreatedAt() {
      return this._createdAt;
    }
    getAuthor() {
      return this._author;
    }
    getRepliedTo() {
      return this._repliedTo;
    }
    toString() {
      if(this._repliedTo == null) {
        return `${this._message} by ${this._author.getName()}`;
      } else {
        return `${this._message} by ${this._author.getName()} (replied to ${this._repliedTo.getAuthor().getName()})`;      
      }
    }
  }
  
  /**************************
   * Alternative using ES5 prototypes
   * Or feel free to choose your own solution format
   **************************
   
  function User(name) {}
  User.prototype = {
    isLoggedIn: function() {}
    getLastLoggedInAt: function() {}
    logIn: function() {}
    logOut: function() {}
    getName: function() {}
    setName: function(name) {}
    canEdit: function(comment) {}
    canDelete: function(comment) {}
  }
  
  var Admin = ???
  
  var Moderator = ???
  
  function Comment(author, message, repliedTo) {}
  Comment.prototype = {
    getMessage: function() {}
    setMessage: function(message) {}
    getCreatedAt: function() {}
    getAuthor: function() {}
    getRepliedTo: function() {}
    toString: function() {}
  }
  ***************************/
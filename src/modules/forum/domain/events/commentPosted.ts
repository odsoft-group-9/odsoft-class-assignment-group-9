import { IDomainEvent } from "../../../../shared/domain/events/IDomainEvent";
import { UniqueEntityID } from "../../../../shared/domain/UniqueEntityID";
import { Comment } from "../comment";
import { Post } from "../post";

/**
 * Represents an event that occurs when a comment is posted.
 */
export class CommentPosted implements IDomainEvent {
  /**
   * The date and time when the event occurred.
   */
  public dateTimeOccurred: Date;

  /**
   * The post associated with the event.
   */
  public post: Post;

  /**
   * The comment that was posted.
   */
  public comment: Comment;

  /**
   * Creates a new instance of the CommentPosted event.
   * @param post - The post associated with the event.
   * @param comment - The comment that was posted.
   */
  constructor(post: Post, comment: Comment) {
    this.dateTimeOccurred = new Date();
    this.post = post;
    this.comment = comment;
  }

  /**
   * Gets the aggregate ID of the associated post.
   * @returns The unique entity ID of the post.
   */
  getAggregateId(): UniqueEntityID {
    return this.post.id;
  }
}

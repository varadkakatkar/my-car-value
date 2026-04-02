import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted record with id ' + this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed record with id ' + this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated record with id ' + this.id);
  }
}

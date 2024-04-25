import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  PhoneNumber: string;

  @Column()
  Email: string;

  @Column()
  Address: string;

  @Column({ default: true })
  isActive: boolean;
}


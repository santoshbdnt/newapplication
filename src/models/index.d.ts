import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerAplication = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Aplication, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly about?: string | null;
  readonly age?: string | null;
  readonly color?: string | null;
  readonly image: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAplication = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Aplication, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly about?: string | null;
  readonly age?: string | null;
  readonly color?: string | null;
  readonly image: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Aplication = LazyLoading extends LazyLoadingDisabled ? EagerAplication : LazyAplication

export declare const Aplication: (new (init: ModelInit<Aplication>) => Aplication) & {
  copyOf(source: Aplication, mutator: (draft: MutableModel<Aplication>) => MutableModel<Aplication> | void): Aplication;
}
import { DocumentNode, ExecutionResult } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** A league of users that compete within an organisation */
export type LeagueType = {
  __typename?: 'LeagueType';
  city: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  members: Array<UserType>;
  name: Scalars['String']['output'];
  owner: UserType;
  size: Scalars['Int']['output'];
};

/** A message within a leagues chat */
export type MessageType = {
  __typename?: 'MessageType';
  name: Scalars['String']['output'];
  room: Scalars['String']['output'];
  text: Scalars['String']['output'];
  time: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createLeague: Scalars['Boolean']['output'];
  createUser: Scalars['Boolean']['output'];
};


export type MutationCreateLeagueArgs = {
  city?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  league: LeagueType;
  leagues: Array<LeagueType>;
  messages: Array<MessageType>;
  user: UserType;
};


export type QueryLeagueArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMessagesArgs = {
  room?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

/** A user of the legend application */
export type UserType = {
  __typename?: 'UserType';
  email: Scalars['String']['output'];
  leagues: Array<LeagueType>;
  name: Scalars['String']['output'];
};

export type GetUserQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'UserType', name: string, email: string } };

export type CreateUserMutationVariables = Exact<{
  token: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: boolean };

export type CreateLeagueMutationVariables = Exact<{
  name: Scalars['String']['input'];
  city: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  owner_id: Scalars['String']['input'];
}>;


export type CreateLeagueMutation = { __typename?: 'Mutation', createLeague: boolean };

export type GetLeaguesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLeaguesQuery = { __typename?: 'Query', leagues: Array<{ __typename?: 'LeagueType', id: string, name: string, city: string, image: string, size: number }> };

export type GetLeagueQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetLeagueQuery = { __typename?: 'Query', league: { __typename?: 'LeagueType', id: string, name: string, city: string, image: string, size: number } };

export type GetUsersLeaguesQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type GetUsersLeaguesQuery = { __typename?: 'Query', user: { __typename?: 'UserType', leagues: Array<{ __typename?: 'LeagueType', id: string, name: string, city: string, image: string, size: number }> } };

export type GetMessagesQueryVariables = Exact<{
  room: Scalars['String']['input'];
}>;


export type GetMessagesQuery = { __typename?: 'Query', messages: Array<{ __typename?: 'MessageType', text: string, name: string, time: string }> };

export type GetLeagueMembersQueryVariables = Exact<{
  leagueId: Scalars['String']['input'];
}>;


export type GetLeagueMembersQuery = { __typename?: 'Query', league: { __typename?: 'LeagueType', members: Array<{ __typename?: 'UserType', name: string }> } };


export const GetUserDocument = gql`
    query GetUser($token: String!) {
  user(token: $token) {
    name
    email
  }
}
    `;
export const CreateUserDocument = gql`
    mutation CreateUser($token: String!, $email: String!, $name: String!) {
  createUser(token: $token, email: $email, name: $name)
}
    `;
export const CreateLeagueDocument = gql`
    mutation CreateLeague($name: String!, $city: String!, $size: Int!, $owner_id: String!) {
  createLeague(name: $name, city: $city, size: $size, owner_id: $owner_id)
}
    `;
export const GetLeaguesDocument = gql`
    query GetLeagues {
  leagues {
    id
    name
    city
    image
    size
  }
}
    `;
export const GetLeagueDocument = gql`
    query GetLeague($id: String!) {
  league(id: $id) {
    id
    name
    city
    image
    size
  }
}
    `;
export const GetUsersLeaguesDocument = gql`
    query GetUsersLeagues($token: String!) {
  user(token: $token) {
    leagues {
      id
      name
      city
      image
      size
    }
  }
}
    `;
export const GetMessagesDocument = gql`
    query GetMessages($room: String!) {
  messages(room: $room) {
    text
    name
    time
  }
}
    `;
export const GetLeagueMembersDocument = gql`
    query GetLeagueMembers($leagueId: String!) {
  league(id: $leagueId) {
    members {
      name
    }
  }
}
    `;
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<ExecutionResult<R, E>> | AsyncIterable<ExecutionResult<R, E>>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetUser(variables: GetUserQueryVariables, options?: C): Promise<ExecutionResult<GetUserQuery, E>> {
      return requester<GetUserQuery, GetUserQueryVariables>(GetUserDocument, variables, options) as Promise<ExecutionResult<GetUserQuery, E>>;
    },
    CreateUser(variables: CreateUserMutationVariables, options?: C): Promise<ExecutionResult<CreateUserMutation, E>> {
      return requester<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, variables, options) as Promise<ExecutionResult<CreateUserMutation, E>>;
    },
    CreateLeague(variables: CreateLeagueMutationVariables, options?: C): Promise<ExecutionResult<CreateLeagueMutation, E>> {
      return requester<CreateLeagueMutation, CreateLeagueMutationVariables>(CreateLeagueDocument, variables, options) as Promise<ExecutionResult<CreateLeagueMutation, E>>;
    },
    GetLeagues(variables?: GetLeaguesQueryVariables, options?: C): Promise<ExecutionResult<GetLeaguesQuery, E>> {
      return requester<GetLeaguesQuery, GetLeaguesQueryVariables>(GetLeaguesDocument, variables, options) as Promise<ExecutionResult<GetLeaguesQuery, E>>;
    },
    GetLeague(variables: GetLeagueQueryVariables, options?: C): Promise<ExecutionResult<GetLeagueQuery, E>> {
      return requester<GetLeagueQuery, GetLeagueQueryVariables>(GetLeagueDocument, variables, options) as Promise<ExecutionResult<GetLeagueQuery, E>>;
    },
    GetUsersLeagues(variables: GetUsersLeaguesQueryVariables, options?: C): Promise<ExecutionResult<GetUsersLeaguesQuery, E>> {
      return requester<GetUsersLeaguesQuery, GetUsersLeaguesQueryVariables>(GetUsersLeaguesDocument, variables, options) as Promise<ExecutionResult<GetUsersLeaguesQuery, E>>;
    },
    GetMessages(variables: GetMessagesQueryVariables, options?: C): Promise<ExecutionResult<GetMessagesQuery, E>> {
      return requester<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, variables, options) as Promise<ExecutionResult<GetMessagesQuery, E>>;
    },
    GetLeagueMembers(variables: GetLeagueMembersQueryVariables, options?: C): Promise<ExecutionResult<GetLeagueMembersQuery, E>> {
      return requester<GetLeagueMembersQuery, GetLeagueMembersQueryVariables>(GetLeagueMembersDocument, variables, options) as Promise<ExecutionResult<GetLeagueMembersQuery, E>>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
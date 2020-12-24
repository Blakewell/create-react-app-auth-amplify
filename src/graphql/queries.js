/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFamily = /* GraphQL */ `
  query GetFamily($id: ID!) {
    getFamily(id: $id) {
      id
      name
      members {
        items {
          id
          firstName
          familyID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFamilys = /* GraphQL */ `
  query ListFamilys(
    $filter: ModelFamilyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFamilys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFamilyMember = /* GraphQL */ `
  query GetFamilyMember($id: ID!) {
    getFamilyMember(id: $id) {
      id
      firstName
      familyID
      family {
        id
        name
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFamilyMembers = /* GraphQL */ `
  query ListFamilyMembers(
    $filter: ModelFamilyMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFamilyMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        familyID
        family {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

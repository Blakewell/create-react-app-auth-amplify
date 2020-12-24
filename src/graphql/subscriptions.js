/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFamily = /* GraphQL */ `
  subscription OnCreateFamily {
    onCreateFamily {
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
export const onUpdateFamily = /* GraphQL */ `
  subscription OnUpdateFamily {
    onUpdateFamily {
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
export const onDeleteFamily = /* GraphQL */ `
  subscription OnDeleteFamily {
    onDeleteFamily {
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
export const onCreateFamilyMember = /* GraphQL */ `
  subscription OnCreateFamilyMember {
    onCreateFamilyMember {
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
export const onUpdateFamilyMember = /* GraphQL */ `
  subscription OnUpdateFamilyMember {
    onUpdateFamilyMember {
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
export const onDeleteFamilyMember = /* GraphQL */ `
  subscription OnDeleteFamilyMember {
    onDeleteFamilyMember {
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

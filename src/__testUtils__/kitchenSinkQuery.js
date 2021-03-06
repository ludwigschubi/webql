// $FlowFixMe[incompatible-call]
const kitchenSinkQuery: string = String.raw`
query queryName($foo: ComplexType, $site: Site = MOBILE) @onQuery {
  whoever123is: node(id: [123, 456]) {
    id
    ... on User @onInlineFragment {
      example#field2 {
        id
        alias: field1(first: 10, after: $foo) @include(if: $foo) {
          id
          ...frag @onFragmentSpread
        }
      }
    }
    ... @skip(unless: $foo) {
      id
    }
    ... {
      id
    }
  }
}

mutation likeStory @onMutation {
  like(story: 123) @onField {
    example#story {
      id @onField
    }
  }
}

subscription StoryLikeSubscription($input: StoryLikeSubscribeInput)
  @onSubscription {
  storyLikeSubscribe(input: $input) {
    example#story {
      example#likers {
        example#count
      }
      example#likeSentence {
        example#text
      }
    }
  }
}

fragment frag on Friend @onFragmentDefinition {
  foo(
    size: $size
    bar: $b
    obj: {
      key: "value"
      block: """
      block string uses \"""
      """
    }
  )
}

{
  unnamed(truthy: true, falsy: false, nullish: null)
  query
}

query {
  __typename
}
`;

export default kitchenSinkQuery;

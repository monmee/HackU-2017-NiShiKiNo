if ( Meteor.users.find().count() === 0 ) {
  var customerId = Accounts.createUser({
    username: 'customer',
    email: 'customer@gmail.com',
    password: '111111',
    profile: {
      userType: 'customer',
      image: '/images/pose_kiri_man.png'
    }
  });
  var providerId = Accounts.createUser({
    username: 'provider',
    email: 'provider@gmail.com',
    password: '222222',
    profile: {
      userType: 'provider',
      image: '/images/omise_shop_tatemono.png'
    }
  });
  var customerId2 = Accounts.createUser({
    username: 'customer2',
    email: 'customer2@gmail.com',
    password: '333333',
    profile: {
      userType: 'customer',
      image: '/images/nojuku.png'
    }
  });
}

if(Threads.find().count()===0){

  var ids=Threads.insert(
    {
      threadID: '1',
      customerID: customerId,
      threadDate: '2017/05/26 11:30',
      threadTitle: 'カレーのアレ',
      threadCategories:{},
      threadComment:'カレーのルーを入れる、なんか魔法のランプみたいなやつ探してます',
      location:{},
      isClosed: false,
      threadStatus: 'processing',
      searchRange:{}
    });
    console.log(ids);
    Posts.insert(
      {
        postID:'1',
        threadID:ids,
        postUser: providerId,
        postDate:'2017/05/26 09:00',
        replyID:{},
        postComment: 'カレー入れるアレありまぁす!!!'
      }
    );
    ids=Threads.insert(
      {
        threadID: '2',
        customerID: customerId2,
        threadDate: '2017/05/24',
        threadTitle:'シンセのACアダプター',
        threadCategories:{},
        threadComment:`〇〇の機種に合うACアダプター売ってませんか?`,
        location:{},
        isClosed: true,
        threadStatus:'done',
        searchRange:{}
      });
      Posts.insert(
        {
          postID:'2',
          threadID:ids,
          postUser:{},
          postDate:'2017/05/26 10:00',
          replyID:{},
          postComment: 'アダプター，うちで売ってます．'
        }
      );
      console.log(ids);
    }

"use strict";var s=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var S=(r,o)=>{for(var a in o)s(r,a,{get:o[a],enumerable:!0})},C=(r,o,a,e)=>{if(o&&typeof o=="object"||typeof o=="function")for(let n of P(o))!y.call(r,n)&&n!==a&&s(r,n,{get:()=>o[n],enumerable:!(e=f(o,n))||e.enumerable});return r};var x=r=>C(s({},"__esModule",{value:!0}),r);var A={};S(A,{ContentExtensionId:()=>I,DataHubSubscriptionEventEnum:()=>p,IdentityProvider:()=>l,InReplyToKind:()=>i,ModerationResourceType:()=>_,ModeratorRole:()=>m,PostKind:()=>d,ReactionKind:()=>c,SocialEventDataType:()=>E,ipfsContentSection:()=>D,socialCallName:()=>T,socialEventName:()=>v,socialEventProtVersion:()=>u,supportedIpfsContentMap:()=>g});module.exports=x(A);var v={PostCreated:"PostCreated",PostDeleted:"PostDeleted",PostUpdated:"PostUpdated",PostShared:"PostShared",PostMoved:"PostMoved",PostFollowed:"PostFollowed",PostUnfollowed:"PostUnfollowed",PostReactionCreated:"PostReactionCreated",PostReactionUpdated:"PostReactionUpdated",PostReactionDeleted:"PostReactionDeleted",SpaceCreated:"SpaceCreated",SpaceUpdated:"SpaceUpdated",SpaceFollowed:"SpaceFollowed",SpaceUnfollowed:"SpaceUnfollowed",SpaceOwnershipTransferAccepted:"SpaceOwnershipTransferAccepted",SpaceOwnershipTransferCreated:"SpaceOwnershipTransferCreated",AccountFollowed:"AccountFollowed",AccountUnfollowed:"AccountUnfollowed",ProfileUpdated:"ProfileUpdated",ExtensionDonationCreated:"ExtensionDonationCreated",ExtensionEvmNftShared:"ExtensionEvmNftShared",ExtensionImageCreated:"ExtensionImageCreated",ExtensionSecretBoxCreated:"ExtensionSecretBoxCreated",CommentCreated:"CommentCreated",CommentDeleted:"CommentDeleted",CommentUpdated:"CommentUpdated",CommentShared:"CommentShared",CommentReactionCreated:"CommentReactionCreated",CommentReactionUpdated:"CommentReactionUpdated",CommentReactionDeleted:"CommentReactionDeleted",CommentReplyCreated:"CommentReplyCreated",CommentReplyDeleted:"CommentReplyDeleted",CommentReplyUpdated:"CommentReplyUpdated",CommentReplyShared:"CommentReplyShared",CommentReplyReactionCreated:"CommentReplyReactionCreated",CommentReplyReactionUpdated:"CommentReplyReactionUpdated",CommentReplyReactionDeleted:"CommentReplyReactionDeleted",UserNameRegistered:"UserNameRegistered",UserNameUpdated:"UserNameUpdated",EvmAddressUnlinkedFromAccount:"EvmAddressUnlinkedFromAccount",EvmAddressLinkedToAccount:"EvmAddressLinkedToAccount",ProxyAdded:"ProxyAdded",ProxyRemoved:"ProxyRemoved"};var T={create_post:"create_post",force_create_post:"force_create_post",update_post:"update_post",move_post:"move_post",follow_post:"follow_post",unfollow_post:"unfollow_post",create_space:"create_space",force_create_space:"force_create_space",create_space_as_profile:"create_space_as_profile",update_space:"update_space",create_post_reaction:"create_post_reaction",force_create_post_reaction:"force_create_post_reaction",update_post_reaction:"update_post_reaction",delete_post_reaction:"delete_post_reaction",force_delete_post_reaction:"force_delete_post_reaction",follow_account:"follow_account",force_follow_account:"force_follow_account",unfollow_account:"unfollow_account",link_eth_address:"link_eth_address",link_evm_address:"link_evm_address",unlink_evm_address:"unlink_evm_address",create_resource_discussion:"create_resource_discussion",link_post_to_resource:"link_post_to_resource",follow_space:"follow_space",force_follow_space:"force_follow_space",unfollow_space:"unfollow_space",accept_pending_ownership:"accept_pending_ownership",reject_pending_ownership:"reject_pending_ownership",register_domain:"register_domain",force_register_domain:"force_register_domain",set_domain_content:"set_domain_content",set_inner_value:"set_inner_value",force_set_inner_value:"force_set_inner_value",set_outer_value:"set_outer_value",set_payment_beneficiary:"set_payment_beneficiary",add_proxy:"add_proxy",remove_proxy:"remove_proxy",synth_create_post_tx_failed:"synth_create_post_tx_failed",synth_create_post_tx_retry:"synth_create_post_tx_retry",synth_update_post_tx_failed:"synth_update_post_tx_failed",synth_update_post_tx_retry:"synth_update_post_tx_retry",synth_create_linked_identity:"synth_create_linked_identity",synth_delete_linked_identity:"synth_delete_linked_identity",synth_moderation_init_moderator:"synth_moderation_init_moderator",synth_moderation_force_init_moderator:"synth_moderation_force_init_moderator",synth_moderation_add_default_ctx_to_moderator:"synth_moderation_add_default_ctx_to_moderator",synth_moderation_force_add_default_ctx_to_moderator:"synth_moderation_force_add_default_ctx_to_moderator",synth_moderation_add_ctx_to_organization:"synth_moderation_add_ctx_to_organization",synth_moderation_force_add_ctx_to_organization:"synth_moderation_force_add_ctx_to_organization",synth_moderation_block_resource:"synth_moderation_block_resource",synth_moderation_force_block_resource:"synth_moderation_force_block_resource",synth_moderation_unblock_resource:"synth_moderation_unblock_resource",synth_moderation_force_unblock_resource:"synth_moderation_force_unblock_resource",synth_moderation_force_init_organization:"synth_moderation_force_init_organization",synth_moderation_force_add_organization_moderator:"synth_moderation_force_add_organization_moderator",synth_active_staking_create_super_like:"synth_active_staking_create_super_like",synth_active_staking_delete_super_like:"synth_active_staking_delete_super_like"};var i=(o=>(o.Post="Post",o))(i||{}),D={post:"post",space:"space"},g=new Map([["post",new Set(["title","image","link","format","canonical","body","slug","tags","tweet","extensions","inReplyTo","optimisticId"])],["space",new Set(["name","email","about","image","tags","links","interests"])]]);var d=(e=>(e.Comment="Comment",e.SharedPost="SharedPost",e.RegularPost="RegularPost",e))(d||{}),c=(a=>(a.Upvote="Upvote",a.Downvote="Downvote",a))(c||{}),u={"0.1":"0.1"};var I={"subsocial-donations":"subsocial-donations","subsocial-evm-nft":"subsocial-evm-nft","subsocial-image":"subsocial-image","subsocial-secret-box":"subsocial-secret-box","subsocial-decoded-promo":"subsocial-decoded-promo","subsocial-pinned-posts":"subsocial-pinned-posts"};var p=(t=>(t.POST_CREATED="POST_CREATED",t.POST_STATE_UPDATED="POST_STATE_UPDATED",t.POST_FOLLOWED="POST_FOLLOWED",t.POST_FOLLOW_STATE_UPDATED="POST_FOLLOW_STATE_UPDATED",t.EVM_ADDRESS_LINKED_TO_ACCOUNT="EVM_ADDRESS_LINKED_TO_ACCOUNT",t.EVM_ADDRESS_LINK_TO_ACCOUNT_STATE_UPDATED="EVM_ADDRESS_LINK_TO_ACCOUNT_STATE_UPDATED",t.LINKED_IDENTITY_CREATED="LINKED_IDENTITY_CREATED",t.LINKED_IDENTITY_STATE_UPDATED="LINKED_IDENTITY_STATE_UPDATED",t.MODERATION_MODERATOR_CREATED="MODERATION_MODERATOR_CREATED",t.MODERATION_MODERATOR_STATE_UPDATED="MODERATION_MODERATOR_STATE_UPDATED",t.MODERATION_BLOCKED_RESOURCE_CREATED="MODERATION_BLOCKED_RESOURCE_CREATED",t.MODERATION_BLOCKED_RESOURCE_STATE_UPDATED="MODERATION_BLOCKED_RESOURCE_STATE_UPDATED",t.MODERATION_ORGANIZATION_CREATED="MODERATION_ORGANIZATION_CREATED",t.MODERATION_ORGANIZATION_STATE_UPDATED="MODERATION_ORGANIZATION_STATE_UPDATED",t))(p||{});var l=(a=>(a.TWITTER="TWITTER",a.EMAIL="EMAIL",a))(l||{});var _=(e=>(e.POST="POST",e.CID="CID",e.ADDRESS="ADDRESS",e))(_||{}),m=(n=>(n.OWNER="OWNER",n.ADMIN="ADMIN",n.MODERATOR="MODERATOR",n.SPECTATOR="SPECTATOR",n))(m||{});var E=(e=>(e.persistent="persistent",e.optimistic="optimistic",e.offChain="offChain",e))(E||{});0&&(module.exports={ContentExtensionId,DataHubSubscriptionEventEnum,IdentityProvider,InReplyToKind,ModerationResourceType,ModeratorRole,PostKind,ReactionKind,SocialEventDataType,ipfsContentSection,socialCallName,socialEventName,socialEventProtVersion,supportedIpfsContentMap});

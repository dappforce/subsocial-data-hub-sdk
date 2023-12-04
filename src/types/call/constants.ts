export const socialCallName = {
  create_post: 'create_post',
  force_create_post: 'force_create_post',
  update_post: 'update_post',
  move_post: 'move_post',
  follow_post: 'follow_post',
  unfollow_post: 'unfollow_post',

  create_space: 'create_space',
  force_create_space: 'force_create_space',
  create_space_as_profile: 'create_space_as_profile',
  update_space: 'update_space',

  create_post_reaction: 'create_post_reaction',
  force_create_post_reaction: 'force_create_post_reaction',
  update_post_reaction: 'update_post_reaction',
  delete_post_reaction: 'delete_post_reaction',
  force_delete_post_reaction: 'force_delete_post_reaction',

  follow_account: 'follow_account',
  force_follow_account: 'force_follow_account',
  unfollow_account: 'unfollow_account',
  link_eth_address: 'link_eth_address',
  link_evm_address: 'link_evm_address',
  unlink_evm_address: 'unlink_evm_address',
  create_resource_discussion: 'create_resource_discussion',
  link_post_to_resource: 'link_post_to_resource',
  follow_space: 'follow_space',
  force_follow_space: 'force_follow_space',
  unfollow_space: 'unfollow_space',
  accept_pending_ownership: 'accept_pending_ownership',
  reject_pending_ownership: 'reject_pending_ownership',
  register_domain: 'register_domain',
  force_register_domain: 'force_register_domain',
  set_domain_content: 'set_domain_content',
  set_inner_value: 'set_inner_value',
  force_set_inner_value: 'force_set_inner_value',
  set_outer_value: 'set_outer_value',
  set_payment_beneficiary: 'set_payment_beneficiary',
  add_proxy: 'add_proxy',
  remove_proxy: 'remove_proxy',

  synth_create_post_tx_failed: 'synth_create_post_tx_failed',
  synth_create_post_tx_retry: 'synth_create_post_tx_retry',
  synth_update_post_tx_failed: 'synth_update_post_tx_failed',
  synth_update_post_tx_retry: 'synth_update_post_tx_retry',

  synth_create_linked_identity: 'synth_create_linked_identity',
  synth_delete_linked_identity: 'synth_delete_linked_identity',

  synth_moderation_init_moderator: 'synth_moderation_init_moderator',
  synth_moderation_force_init_moderator:
    'synth_moderation_force_init_moderator',
  synth_moderation_add_default_ctx_to_moderator:
    'synth_moderation_add_default_ctx_to_moderator',
  synth_moderation_force_add_default_ctx_to_moderator:
    'synth_moderation_force_add_default_ctx_to_moderator',
  synth_moderation_add_ctx_to_organization:
    'synth_moderation_add_ctx_to_organization',

  synth_moderation_force_add_ctx_to_organization:
    'synth_moderation_force_add_ctx_to_organization',
  synth_moderation_block_resource: 'synth_moderation_block_resource',
  synth_moderation_force_block_resource:
    'synth_moderation_force_block_resource',
  synth_moderation_unblock_resource: 'synth_moderation_unblock_resource',
  synth_moderation_force_unblock_resource:
    'synth_moderation_force_unblock_resource',
  synth_moderation_force_init_organization:
    'synth_moderation_force_init_organization',
  synth_moderation_force_add_organization_moderator:
    'synth_moderation_force_add_organization_moderator'
} as const;
